import '../pages/style.css';
import '../App.css';

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import TopBubble from '../assets/bubble-icon-04.svg';
import BottomBubble from '../assets/bubble-icon-05.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PlaceholderProfPic from '../assets/profile-picture-placeholder.png';


function Blog() {    
    return (
        <div className="info-page">
            <div className="spacer"></div>
            <img className="bubble-top-left" src={TopBubble}/>

            <div className="inner">
                <h2 className="dropshadow">Blog</h2>
                <div className="info-page-subheader">Read about what BookMark’d has been up to:</div>

                <div className="careers-list__container">

                    <div className="career-item blog-item">
                        <img className="blog-preview-img" src={PlaceholderProfPic}/>
                        <div>
                        <div className="side-by-side">
                            <div>Title</div>
                            <div className="mini">Date posted</div>
                        </div>
                        <div className="side-by-side">
                            <div className="mini">Description of post...</div>
                            <a className="">View post <ArrowRightAltIcon className="center-img"/></a>
                        </div>
                        </div>
                    </div>

                   <div className="career-item blog-item">
                        <img className="blog-preview-img" src={PlaceholderProfPic}/>
                        <div>
                        <div className="side-by-side">
                            <div>Title</div>
                            <div className="mini">Date posted</div>
                        </div>
                        <div className="side-by-side">
                            <div className="mini">Description of post...</div>
                            <a className="">View post <ArrowRightAltIcon className="center-img"/></a>
                        </div>
                        </div>
                    </div>

                   <div className="career-item blog-item">
                        <img className="blog-preview-img" src={PlaceholderProfPic}/>
                        <div>
                        <div className="side-by-side">
                            <div>Title</div>
                            <div className="mini">Date posted</div>
                        </div>
                        <div className="side-by-side">
                            <div className="mini">Description of post...</div>
                            <a className="">View post <ArrowRightAltIcon className="center-img"/></a>
                        </div>
                        </div>
                    </div>

                   <div className="career-item blog-item">
                        <img className="blog-preview-img" src={PlaceholderProfPic}/>
                        <div>
                        <div className="side-by-side">
                            <div>Title</div>
                            <div className="mini">Date posted</div>
                        </div>
                        <div className="side-by-side">
                            <div className="mini">Description of post...</div>
                            <a className="">View post <ArrowRightAltIcon className="center-img"/></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className="bubble-bottom-right" src={BottomBubble}/>
            <Footer/>
        </div>
    );
}

export default Blog;
