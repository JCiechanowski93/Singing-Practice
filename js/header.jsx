import React, { Component } from 'react';
import noteRed from './../images/musical-note.png'
import noteYellow from './../images/music-player.png'
import notePurple from './../images/music-player-purple.png'

const Header = props =>
    (<header className="header">
        <img src={noteRed} alt="" />
        <img src={noteYellow} alt="" />
        <img src={notePurple} alt="" />
        <div className="header_container">
            <h1><a href="#">
                <span>S</span><span>i</span><span>n</span><span>g</span><span>i</span><span>n</span><span>g</span> <span>P</span><span>r</span><span>a</span><span>c</span><span>t</span><span>i</span><span>c</span><span>e</span>
            </a></h1>
        </div>
        <img src={noteRed} alt="" />
        <img src={noteYellow} alt="" />
        <img src={notePurple} alt="" />
    </header>);

export default Header;