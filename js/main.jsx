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
                                <option value="lollipop">Lollipop</option>
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
                        <label className="col-md-12">
                            <input className="btn btn-dark  btn-lg btn-block btn_confirm" type="submit" value="Confirm"></input>
                        </label>
                    </div>
                </div>
            </form>
        </main>);
    }
}

export default Main;