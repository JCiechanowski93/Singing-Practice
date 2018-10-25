import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';

class Board extends Component {
    state = {
        top: "",
        left: "",
        bottom: "",
        right: "",
        width: "",
        height: "",
        display: "",
        img: this.props.match.params.song
    }

    componentDidMount() {
        console.log(this.state.img);


        this.intervalID = setInterval(() => {
            console.log(this.audio.currentTime);
            if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "bellaciao") {

                if (this.audio.currentTime >= 0.1) { //switch (this.audio) case: >=
                    this.setState({
                        left: "5%",
                        top: "10%",
                        display: "block"
                    })
                }
                if (this.audio.currentTime >= 4.4) {
                    this.setState({
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 6.6) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 8.6) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 10.6) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 12.6) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 15.0) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 17.1) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 19.1) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 21.1) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 23.1) {
                    this.setState({
                        top: "10%",
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 25.5) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 27.5) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 29.5) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 31.5) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 34.1) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 36.3) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 38.2) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 40.4) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
            } else if (this.props.match.params.voice === "alt" && this.props.match.params.song === "bellaciao") {
                if (this.audio.currentTime >= 0.1) {
                    this.setState({
                        left: "5%",
                        top: "10%",
                        display: "block"
                    })
                }
                if (this.audio.currentTime >= 4.2) {
                    this.setState({
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 6.4) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 8.4) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 10.4) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 12.4) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 14.8) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 16.9) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 18.9) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 20.9) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 23.4) {
                    this.setState({
                        top: "10%",
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 25.4) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 27.4) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 29.4) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 31.4) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 33.8) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 35.9) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 37.9) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 39.9) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
            } else if (this.props.match.params.voice === "tenor" || this.props.match.params.voice === "bas" && this.props.match.params.song === "bellaciao") {
                if (this.audio.currentTime >= 0.1) {
                    this.setState({
                        left: "5%",
                        top: "10%",
                        display: "block"
                    })
                }
                if (this.audio.currentTime >= 6.2) {
                    this.setState({
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 8.4) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 10.4) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 12.4) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 14.4) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 16.8) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 18.9) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 20.9) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 22.9) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 25.4) {
                    this.setState({
                        top: "10%",
                        left: "31%",
                        width: "288px"
                    })
                }
                if (this.audio.currentTime >= 27.4) {
                    this.setState({
                        left: "57%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 29.4) {
                    this.setState({
                        left: "3%",
                        top: "40%",
                        width: "365px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 31.4) {
                    this.setState({
                        left: "36%",
                        top: "40%",
                        width: "310px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 33.4) {
                    this.setState({
                        left: "64%",
                        top: "40%",
                        width: "285px",
                        height: "305px"
                    })
                }
                if (this.audio.currentTime >= 35.8) {
                    this.setState({
                        left: "3%",
                        top: "70%",
                        width: "290px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 37.9) {
                    this.setState({
                        left: "29%",
                        top: "70%",
                        width: "233px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 39.9) {
                    this.setState({
                        left: "50%",
                        top: "70%",
                        width: "210px",
                        height: "328px"
                    })
                }
                if (this.audio.currentTime >= 41.9) {
                    this.setState({
                        left: "69%",
                        top: "70%",
                        width: "220px",
                        height: "328px"
                    })
                }
            }
            else if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "lollipop") {

                if (this.audio.currentTime >= 0) {
                    this.setState({
                        display: "none"
                    })
                }

                if (this.audio.currentTime >= 8) {
                    this.setState({
                        left: "79.3%",
                        top: "3%",
                        width: "220px",
                        height: "300px",
                        display: "block"
                    })
                }

                if (this.audio.currentTime >= 12) {
                    this.setState({
                        top: "24%",
                        left: "4%",
                        height: "310px",
                        width: "255px",
                    })
                }
                if (this.audio.currentTime >= 14.2) {
                    this.setState({
                        left: "27%",
                        width: "235px"
                    })
                }
                if (this.audio.currentTime >= 16.3) {
                    this.setState({
                        left: "48%",
                        width: "200px"
                    })
                }
                if (this.audio.currentTime >= 18.9) {
                    this.setState({
                        left: "66%",
                        width: "173px"
                    })
                }
                if (this.audio.currentTime >= 23.5) {
                    this.setState({
                        top: "46.5%",
                        left: "4%",
                        width: "330px",
                        height: "405px"
                    })
                }
                if (this.audio.currentTime >= 26) {
                    this.setState({
                        left: "33.8%",
                        width: "223px"
                    })
                }
                if (this.audio.currentTime >= 28.5) {
                    this.setState({
                        left: "54%",
                        width: "273px"
                    })
                }
                if (this.audio.currentTime >= 31) {
                    this.setState({
                        left: "78.5%",
                        width: "225px"
                    })
                }
                if (this.audio.currentTime >= 33) {
                    this.setState({
                        left: "4%",
                        top: "73%",
                        width: "360px"
                    })
                }
                if (this.audio.currentTime >= 35.5) {
                    this.setState({
                        left: "36.3%",
                        width: "247px"
                    })
                }
                if (this.audio.currentTime >= 38) {
                    this.setState({
                        left: "58.5%",
                        width: "210px"
                    })
                }
                if (this.audio.currentTime >= 41) {
                    this.setState({
                        img: "lollipop-2",
                        left: "4%",
                        top: "1%",
                        width: "320px",
                        height: "370px"

                    })
                }
                if (this.audio.currentTime >= 45.5) {
                    this.setState({
                        left: "32.5%",
                        width: "210px"
                    })
                }
                if (this.audio.currentTime >= 48) {
                    this.setState({
                        left: "51.5%",
                        width: "302px"
                    })
                }
                if (this.audio.currentTime >= 50) {
                    this.setState({
                        left: "78.5%",
                        width: "225px"
                    })
                }
                if (this.audio.currentTime >= 52.5) {
                    this.setState({
                        left: "4%",
                        top: "26%",
                        width: "355px"
                    })
                }
                if (this.audio.currentTime >= 54.5) {
                    this.setState({
                        left: "36%",
                        width: "225px"
                    })
                }
                if (this.audio.currentTime >= 57) {
                    this.setState({
                        left: "56%",
                        width: "297px"
                    })
                }
                if (this.audio.currentTime >= 60) {
                    this.setState({
                        left: "82.5%",
                        width: "180px"
                    })
                }
                if (this.audio.currentTime >= 62) {
                    this.setState({
                        left: "4%",
                        top: "50%",
                        width: "285px"
                    })
                }
                if (this.audio.currentTime >= 64.5) {
                    this.setState({
                        left: "29.5%",
                        width: "235px"
                    })
                }
                if (this.audio.currentTime >= 67) {
                    this.setState({
                        left: "50.5%",
                        width: "342px"
                    })
                }
                if (this.audio.currentTime >= 69.3) {
                    this.setState({
                        left: "81%",
                        width: "195px"
                    })
                }
            }



        }, 400);
    }

    handleLinkClick = () => {
        clearInterval(this.intervalID);
    }

    render() {
        return (<div className="container">
            <Link onClick={this.handleLinkClick} to="/"><img src="./images/reply.png" alt="" /></Link>
            <div className="tracks">
                <audio ref={el => this.audio = el} src={`./tracks/${this.props.match.params.song}-${this.props.match.params.voice}.mp3`} controls />
            </div>
            <div className="div_container">
                <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
                <img className="notes_image" src={`./images/${this.state.img}.jpg`} alt="" />
            </div>
        </div>)

    }
}

export default Board;



//         // if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "bellaciao") {
//         //     return (<div className="container">
//         //         <Link onClick={this.handleLinkClick} to="/"><img src="./images/reply.png" alt="" /></Link>
//         //         <div className="tracks">
//         //             <audio ref={el => this.audio = el} src="./tracks/bella-ciao-sopran.mp3" controls />
//         //         </div>
//         //         <div className="div_container">
//         //             <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
//         //             <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
//         //         </div>
//         //     </div>)
//         // } else if (this.props.match.params.voice === "alt" && this.props.match.params.song === "bellaciao") {
//         //     return (<div className="container">
//         //         <Link onClick={this.handleLinkClick} to="/"> <img src="./images/reply.png" alt="" /></Link>
//         //         <div className="tracks">
//         //             <audio ref={el => this.audio = el} src="./tracks/bella-ciao-alt.mp3" controls />
//         //         </div>
//         //         <div className="div_container">
//         //             <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
//         //             <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
//         //         </div>
//         //     </div>)
//         // } else if (this.props.match.params.voice === "tenor" || this.props.match.params.voice === "bas" && this.props.match.params.song === "bellaciao") {
//         //     return (<div className="container">
//         //         <Link onClick={this.handleLinkClick} to="/"><img src="./images/reply.png" alt="" /> </Link>
//         //         <div className="tracks">
//         //             <audio ref={el => this.audio = el} src="./tracks/bella-ciao-bas.mp3" controls />
//         //         </div>
//         //         <div className="div_container">
//         //             <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
//         //             <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
//         //         </div>
//         //     </div>)
//     }
// }


