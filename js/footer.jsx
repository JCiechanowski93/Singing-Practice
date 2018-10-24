import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    state = {}
    render() {
        return (<footer className="footer">
            <div>
                Jakub Ciechanowski &copy;
            </div>
            <div>
                The ownership of notes and tracks: Cantiamo Tutto Choir
            </div>
        </footer>);
    }
}



export default Footer;