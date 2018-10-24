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

                <h1>Singing Practice</h1>
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
    state = {}
    render() {
        console.log(this.props);
        if (this.props.match.params.voice === "sopran" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link to="/"><img src="./images/reply.png" alt="" /></Link>
                <div className="tracks">
                    <audio ref="" src="./tracks/bella-ciao-sopran.mp3" controls />
                </div>
                <div>
                    <img src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        } else if (this.props.match.params.voice === "alt" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link to="/"> <img src="./images/reply.png" alt="" /></Link>
                <div className="tracks">
                    <audio ref="" src="./tracks/bella-ciao-alt.mp3" controls />
                </div>
                <div>
                    <img src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        } else if (this.props.match.params.voice === "tenor" || this.props.match.params.voice === "bas" && this.props.match.params.song === "bellaciao") {
            return (<div className="container">
                <Link to="/"><img src="./images/reply.png" alt="" /> </Link>
                <div className="tracks">
                    <audio ref="" src="./tracks/bella-ciao-bas.mp3" controls />
                </div>
                <div>
                    <img src="./images/bellaciao.jpg" alt="" />
                </div>
            </div>)
        }
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