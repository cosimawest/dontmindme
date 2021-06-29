const express = require("express");

const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://uddipan:uddipan123@clusteru-stdcj.mongodb.net/bookmarkd?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(morgan("dev"));

//Routes
const sendMessage = require("./routes/sendMessage"),
  fetchLiveUsers = require("./routes/fetchLiveUsers"),
  fetchChats = require("./routes/fetchChats"),
  fetchUserChats = require("./routes/fetchUserChats"),
  uploadPicture = require("./routes/uploadPicture"),
  MarkChatSeen = require("./routes/markAsSeen");

app.use("/chat", sendMessage);
app.use("/chat", fetchLiveUsers);
app.use("/chat", fetchChats);
app.use("/chat", fetchUserChats);
app.use("/chat", uploadPicture);
app.use("/chat", MarkChatSeen);

app.use((req, res, next) => {
  console.log(req);
  res.status(404).json({
    message: "no such route found",
    route: `${req.headers.host}${req.url}`,
  });
});

module.exports = app;
