import '../pages/style.css';
import '../App.css';


function HowItWorksIcons(props) {
  return (
    <div className="how-it-works__icon-container book-card__container-small">
        <div>
            <img src={props.icon1}/>
            <h3>1</h3>
            {props.description1}  
        </div>
        <div>
            <img src={props.icon2}/>
            <h3>2</h3>
            {props.description2} 
        </div>
        <div>
            <img src={props.icon3}/>
            <h3>3</h3>
            {props.description3}  
        </div>
    </div>
  );
}

export default HowItWorksIcons;
