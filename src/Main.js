import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./contents/Home";
import Stuff from "./contents/Stuff";
import Contact from "./contents/Contact";
import ImgEarlyTimes from "./images/early-times.png";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header>
                        <img src={ImgEarlyTimes} className="mainLogo" />
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </header>
                    <div className="content">
                        <Route path="/Home" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;