import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import reply from './../images/reply.png'
import * as tracks from "../tracks"
import * as notesImg from "../images"


class Board extends Component {
    state = {
        top: "",
        left: "",
        width: "",
        height: "",
        display: "",
        img: this.props.match.params.song[0].toUpperCase() + this.props.match.params.song.substr(1)
    }

    componentDidMount() {
        const { match: { params: { voice, song } } } = this.props;

        this.intervalID = setInterval(() => {
            if (voice === "sopran" && song === "bellaciao") {

                if (this.audio.currentTime >= 0.1) {
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
                    if (this.audio.currentTime <= 8.95) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 15.4) {
                        window.scrollTo(550, 550)
                    }
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
                        width: "288px",
                    })
                    if (this.audio.currentTime <= 23.5) {
                        window.scrollTo(0, 0)
                    }
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
                    if (this.audio.currentTime <= 27.9) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 34.5) {
                        window.scrollTo(550, 550)
                    }
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
            } else if (voice === "alt" && song === "bellaciao") {
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
                    if (this.audio.currentTime <= 8.95) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 15.4) {
                        window.scrollTo(550, 550)
                    }
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
                    if (this.audio.currentTime <= 23.8) {
                        window.scrollTo(0, 0)
                    }
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
                    if (this.audio.currentTime <= 27.9) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 34.5) {
                        window.scrollTo(550, 550)
                    }
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
            } else if (voice === "tenor" || voice === "bas" && song === "bellaciao") {
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
                    if (this.audio.currentTime <= 10.9) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 17.4) {
                        window.scrollTo(550, 550)
                    }
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
                    if (this.audio.currentTime <= 25.8) {
                        window.scrollTo(0, 0)
                    }
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
                    if (this.audio.currentTime <= 29.9) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 36.5) {
                        window.scrollTo(550, 550)
                    }
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
            else if (voice === "sopran"
                || voice === "alt"
                || voice === "tenor"
                || voice === "bas"
                && song === "lollipop") {

                if (this.audio.currentTime >= 0) {
                    this.setState({
                        display: "none"
                    })
                }
                if (this.audio.currentTime >= 0.1) {
                    this.setState({
                        left: "4%",
                        top: "3%",
                        display: "block",
                        width: "283px"
                    })
                }
                if (this.audio.currentTime >= 2.2) {
                    this.setState({
                        left: "29.5%",
                        width: "158px"
                    })
                }
                if (this.audio.currentTime >= 4.2) {
                    this.setState({
                        left: "43.5%",
                        width: "218px"
                    })
                }

                if (this.audio.currentTime >= 6.2) {
                    this.setState({
                        left: "62.8%",
                        width: "183px"
                    })
                }

                if (this.audio.currentTime >= 8) {
                    this.setState({
                        left: "79.3%",
                        top: "3%",
                        width: "220px",
                        height: "300px",
                        display: "block",
                    })
                }

                if (this.audio.currentTime >= 12) {
                    this.setState({
                        top: "24%",
                        left: "4%",
                        height: "310px",
                        width: "255px",
                    })
                    if (this.audio.currentTime <= 12.3) {
                        window.scrollTo(300, 300)
                    }
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
                if (this.audio.currentTime >= 21) {
                    this.setState({
                        left: "81.7%",
                        width: "185px"
                    })
                }
                if (this.audio.currentTime >= 23.5) {
                    this.setState({
                        top: "46.5%",
                        left: "4%",
                        width: "330px",
                        height: "405px"
                    })
                    if (this.audio.currentTime <= 23.8) {
                        window.scrollTo(600, 600)
                    }
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
                    if (this.audio.currentTime <= 33.5) {
                        window.scrollTo(1100, 1100)
                    }
                }
                if (this.audio.currentTime >= 35.5) {
                    this.setState({
                        left: "36.3%",
                        width: "247px"
                    })
                }
                if (this.audio.currentTime >= 37.5) {
                    this.setState({
                        left: "58.5%",
                        width: "210px"
                    })
                }
                if (this.audio.currentTime >= 39.5) {
                    this.setState({
                        left: "77.5%",
                        width: "240px"
                    })
                }
                if (this.audio.currentTime >= 43) {
                    this.setState({
                        img: "Lollipop2",
                        left: "4%",
                        top: "1%",
                        width: "320px",
                        height: "370px"

                    })
                    if (this.audio.currentTime <= 43.5) {
                        window.scrollTo(0, 0)
                    }
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
                    if (this.audio.currentTime <= 53) {
                        window.scrollTo(300, 300)
                    }
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
                    if (this.audio.currentTime <= 62.5) {
                        window.scrollTo(650, 650)
                    }
                }

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
            if (this.audio.currentTime >= 71.7) {
                this.setState({
                    left: "4%",
                    top: "75%",
                    width: "355px"
                })
                if (this.audio.currentTime <= 72.3) {
                    window.scrollTo(1100, 1100)
                }
            }
            if (this.audio.currentTime >= 74) {
                this.setState({
                    left: "35.7%",
                    width: "278px"
                })
            }
            if (this.audio.currentTime >= 76.5) {
                this.setState({
                    left: "60.6%",
                    width: "208px"
                })
            }
            if (this.audio.currentTime >= 79) {
                this.setState({
                    left: "79.2%",
                    width: "214px"
                })
            }
            if (this.audio.currentTime >= 81) {
                this.setState({
                    img: "Lollipop3",
                    left: "4%",
                    top: "1%",
                    width: "335px",
                    height: "370px"
                })
                if (this.audio.currentTime <= 81.3) {
                    window.scrollTo(0, 0)
                }
            }
            if (this.audio.currentTime >= 84) {
                this.setState({
                    left: "34%",
                    width: "210px"
                })
            }
            if (this.audio.currentTime >= 86) {
                this.setState({
                    left: "53%",
                    width: "273px"
                })
            }
            if (this.audio.currentTime >= 88) {
                this.setState({
                    left: "77.5%",
                    width: "240px"
                })
            }
            if (this.audio.currentTime >= 91) {
                this.setState({
                    left: "4%",
                    top: "26%",
                    width: "338px"
                })
                if (this.audio.currentTime <= 91.5) {
                    window.scrollTo(300, 300)
                }
            }
            if (this.audio.currentTime >= 93.5) {
                this.setState({
                    left: "34.5%",
                    width: "245px"
                })
            }
            if (this.audio.currentTime >= 95.5) {
                this.setState({
                    left: "56.5%",
                    width: "285px"
                })
            }
            if (this.audio.currentTime >= 98) {
                this.setState({
                    left: "82%",
                    width: "190px"
                })
            }
            if (this.audio.currentTime >= 101) {
                this.setState({
                    left: "4%",
                    top: "52%",
                    width: "330px",
                    height: "310px"
                })
                if (this.audio.currentTime <= 101.5) {
                    window.scrollTo(650, 650)
                }
            }
            if (this.audio.currentTime >= 103.2) {
                this.setState({
                    left: "33.7%",
                    width: "224px"
                })
            }
            if (this.audio.currentTime >= 105) {
                this.setState({
                    left: "54%",
                    width: "273px"
                })
            }
            if (this.audio.currentTime >= 107.5) {
                this.setState({
                    left: "78.5%",
                    width: "225px"
                })
            }
            if (this.audio.currentTime >= 110) {
                this.setState({
                    left: "4%",
                    top: "75%",
                    width: "368px",
                    height: "330px"
                })
                if (this.audio.currentTime <= 110.5) {
                    window.scrollTo(1100, 1100)
                }
            }
            if (this.audio.currentTime >= 112.5) {
                this.setState({
                    left: "37%",
                    width: "252px"
                })
            }
            if (this.audio.currentTime >= 114.7) {
                this.setState({
                    left: "59.5%",
                    width: "244px"
                })
            }
            if (this.audio.currentTime >= 117) {
                this.setState({
                    left: "81.5%",
                    width: "200px"
                })
            }
        }, 400);
    }

    handleLinkClick = () => {
        clearInterval(this.intervalID);
    }

    render() {
        const { match: { params: { voice, song } } } = this.props;
        const trackName = song[0].toUpperCase() + song.substr(1) + voice[0].toUpperCase() + voice.substr(1);
        return (<div className="container">
            <Link onClick={this.handleLinkClick} to="/"><img src={reply} alt="" /></Link>
            <div className="tracks">
                <audio ref={el => this.audio = el} src={tracks[trackName]} controls />
            </div>
            <div className="div_container">
                <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
                <img className="notes_image" src={notesImg[this.state.img]} alt="" />
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


