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
import Header from "./header.jsx"
import Main from "./main.jsx"
import Board from "./board.jsx"
import Footer from "./footer.jsx"



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