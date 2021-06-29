var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};
socketApi.io = io;

/* Load helpers */
const StoreChats = require("./helpers/chat/storeChats");

/* Load models */
const LiveUsers = require("./models/chatUsers");

io.on('connection', function(socket){
  console.log("New client connected");
  socket.on('join', function (data) {
    console.log('USERID: ',data.userid);
    socket.join(data.userid); // We are using room of socket io
  });
  // io.sockets.emit('askUserId')

  // socket.on('askUserId', async function (userId) {
  //   console.log('User ID', userId);
  //   try{
  //       await StoreLiveUsers({user_id: userId, socket_id: socket.id})
  //   }
  //   catch(err){
  //       console.log(err);
  //   }
  // });
  socket.on('chats', async function (message) {
    console.log('Message from user:', message);
    await StoreChats({
      user_id: message.user_id, 
      message: message.message, 
      is_loggedin: message.is_loggedin,
      sender: "user", 
      socket_id: socket.id,
      image: message.filename ? message.filename : "N/A"
    });
    io.sockets.emit('admin_chats');
  });
  socket.on('update_name', async function(data) {
    await LiveUsers.findOneAndUpdate({user_id: data.user_id},{name: data.name}, {new: true});
  });
  socket.on('disconnect', async function() {
    console.log('User disconnected!');
    console.log(socket.id);
    // await DeleteLiveUser({socket_id: socket.id});
 });
});
socketApi.sendNotification = async function(message) {
    return new Promise(async(resolve, reject) => {
      try{
        // const row = await LiveUsers.findOne({user_id: message.user_id});
        const resp = await StoreChats({
          user_id: message.user_id, 
          chat_user_id: message.chat_user_id,
          message: message.message, 
          is_loggedin: "yes",
          sender: "admin", 
          image: "N/A",
          socket_id: null
        });
        // io.sockets.to(row.socket_id).emit('chats', message.message);
        console.log(message.session_id);
        io.sockets.in(message.session_id).emit('chats', message.message);
        resolve(resp)
      }catch(err){
        reject(err)
      }
    })
}

module.exports = socketApi;