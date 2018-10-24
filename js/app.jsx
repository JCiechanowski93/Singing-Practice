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
// import './../sass/style.scss';
import 'bootstrap/dist/css/bootstrap.css'


class Header extends Component {
    state = {}
    render() {
        return (<div>
            <h1>Header</h1>
        </div>);
    }
}



class Main extends Component {
    state = {
        song: "bellaciao",
        voice: "",
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
        return (<div>

            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-2">
                        <label>  <h4>Choose your song</h4>
                            <select className="form-control custom-select" onChange={this.handleSongChange} value={this.state.song}>
                                <option value="bellaciao">Bella Ciao</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-md-3">
                        <label><h4>Choose your singing voice</h4>
                            <select className="form-control custom-select" onChange={this.handleVoiceChange} value={this.state.voice}>
                                <option value="sopran">Sopran</option>
                                <option value="alt">Alt</option>
                                <option value="tenor">Tenor</option>
                                <option value="bas">Bas</option>
                            </select>
                        </label>
                    </div>

                    <div className="col-md-12">
                        <label className="col-md-3">
                            <input className="btn btn-dark  btn-lg btn-block" type="submit" value="Confirm"></input>
                        </label>
                    </div>
                </div>
            </form>
        </div>);
    }
}


class Board extends Component {
    state = {}
    render() {
        console.log(this.props);
        if (this.props.match.params.song === "bellaciao") {
            return <div>
                <img src="./images/bellaciao.jpg" alt="" />
                <audio ref="" src="./tracks/bellaciaoalt.mp3" controls autoPlay />
            </div>
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