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
                <h1><a href="#">Singing Practice</a></h1>
            </div>
            <img src="./images/music-player-purple.png" alt="" />
            <img src="./images/music-player.png" alt="" />
            <img src="./images/musical-note.png" alt="" />
        </header>);
    }
}

export default Header;