import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    state = {}
    render() {
        return (<footer className="footer">
            <div className="myProfile">
                <div>
                    Jakub Ciechanowski &copy;
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jakub-ciechanowski/"><i className="fab fa-linkedin"></i></a>
                </div>
                <div>
                    <a href="https://github.com/JCiechanowski93"><i className="fab fa-github-square"></i></a>
                </div>
            </div>
            <div className="cantiamoTutto">
                <div>
                    The ownership of sheet music and tracks: Cantiamo Tutto Choir
                </div>
                <div>
                    <a href="https://www.facebook.com/CantiamoTutto/"><img src="./images/cantiamotutto.jpg" alt="" /></a>
                </div>
            </div>
        </footer>);
    }
}



export default Footer;