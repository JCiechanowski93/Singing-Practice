import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cantiamo from './../images/cantiamotutto.jpg'

class Footer extends Component {
    state = {}
    render() {
        return (<footer className="footer">
            <div className="myProfile">
                <div>
                    Jakub Ciechanowski
                </div>
                <div><i className="far fa-copyright"></i></div>
                <div>
                    <a href="https://www.linkedin.com/in/jakub-ciechanowski/"><i className="fab fa-linkedin"></i></a>
                </div>
                <div>
                    <a href="https://github.com/JCiechanowski93"><i className="fab fa-github-square"></i></a>
                </div>
            </div>
            <div className="cantiamoTutto">
                <div>
                    The ownership of sheet music and tracks: Cantiamo Tutto
                </div>
                <div>
                    <a href="https://www.facebook.com/CantiamoTutto/"><img src={cantiamo} alt="" /></a>
                </div>
            </div>
        </footer>);
    }
}



export default Footer;