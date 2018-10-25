import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    state = {}
    render() {
        return (<header className="header">
            <img src="./images/musical-note.png" alt="" />
            <img src="./images/music-player.png" alt="" />
            <img src="./images/music-player-purple.png" alt="" />
            <div className="header_container">
                <h1><a href="#">
                    <span>S</span><span>i</span><span>n</span><span>g</span><span>i</span><span>n</span><span>g</span> <span>P</span><span>r</span><span>a</span><span>c</span><span>t</span><span>i</span><span>c</span><span>e</span>
                </a></h1>
            </div>
            <img src="./images/music-player-purple.png" alt="" />
            <img src="./images/music-player.png" alt="" />
            <img src="./images/musical-note.png" alt="" />
        </header>);
    }
}

export default Header;