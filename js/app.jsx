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
import '../sass/style.scss';
import 'bootstrap/dist/css/bootstrap.css'


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



class Main extends Component {
    state = {
        song: "bellaciao",
        voice: "sopran",
        redirect: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            redirect: `/${this.state.song}/${this.state.voice}`
        })
    }

    handleSongChange = (e) => {
        this.setState({
            song: e.target.value
        })
    }

    handleVoiceChange = (e) => {
        this.setState({
            voice: e.target.value
        })
    }


    render() {
        if (this.state.redirect !== "") {
            return <Redirect to={this.state.redirect} />
        }
        return (<main className="container main_container">

            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <label>  <h4>Choose your song</h4>
                            <select className="form-control custom-select" onChange={this.handleSongChange} value={this.state.song}>
                                <option value="bellaciao">Bella Ciao</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label><h4>Choose your singing voice</h4>
                            <select className="form-control custom-select" onChange={this.handleVoiceChange} value={this.state.voice}>
                                <option value="sopran">Sopran</option>
                                <option value="alt">Alt</option>
                                <option value="tenor">Tenor</option>
                                <option value="bas">Bas</option>
                            </select>
                        </label>
                    </div>

                    <div className="col-md-4">
                        <label>
                            <input className="btn btn-dark  btn-lg btn-block btn_confirm" type="submit" value="Confirm"></input>
                        </label>
                    </div>
                </div>
            </form>
        </main>);
    }
}


class Board extends Component {
    state = {
        top: "10%",
        left: "5%",
        bottom: "",
        right: "",
        width: "",
        height: "",
        display: ""
    }

    handlePlay = () => {
        console.log("Test play");

    }

    handlePause = () => {
        console.log("Test pause");

    }

    componentDidMount() {

        this.intervalID = setInterval(() => {
            console.log(this.audio.currentTime);
            if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "bellaciao") {

                if (this.audio.currentTime >= 0.1) {
                    this.setState({
                        left: this.state.left,
                        top: this.state.top,
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
                        left: this.state.left,
                        top: this.state.top,
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
                        left: this.state.left,
                        top: this.state.top,
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
        }, 400);

    }

    handleLinkClick = () => {
        clearInterval(this.intervalID);
    }



    render() {
        console.log(this.props);
        if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link onClick={this.handleLinkClick} to="/"><img src="./images/reply.png" alt="" /></Link>
                <div className="tracks">
                    <audio onPlay={this.handlePlay} onPause={this.handlePause} ref={el => this.audio = el} src="./tracks/bella-ciao-sopran.mp3" controls />
                </div>
                <div className="div_container">
                    <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
                    <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        } else if (this.props.match.params.voice === "alt" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link onClick={this.handleLinkClick} to="/"> <img src="./images/reply.png" alt="" /></Link>
                <div className="tracks">
                    <audio ref={el => this.audio = el} src="./tracks/bella-ciao-alt.mp3" controls />
                </div>
                <div className="div_container">
                    <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
                    <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        } else if (this.props.match.params.voice === "tenor" || this.props.match.params.voice === "bas" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link onClick={this.handleLinkClick} to="/"><img src="./images/reply.png" alt="" /> </Link>
                <div className="tracks">
                    <audio ref={el => this.audio = el} src="./tracks/bella-ciao-bas.mp3" controls />
                </div>
                <div className="div_container">
                    <div className="div_background" style={{ top: this.state.top, left: this.state.left, width: this.state.width, height: this.state.height, display: this.state.display }}></div>
                    <img className="notes_image" src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        }
    }
}

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




const App = () => {
    return (
        <HashRouter>
            <div>
                <Header />
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/:song/:voice" component={Board} />
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
})