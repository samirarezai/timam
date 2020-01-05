import React, {Component} from 'react';
import Code from "./components/login/code";
import './assets/scss/publicComponents.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from "./components/login/profile";
import Team from "./components/login/team";
import Notfound from "./components/publicComponents/notfound";
import Home from "./components/home/home";
import QrLogin from "./components/qr/qrlogin";
import MapBuy from './components/map/map';
class App extends Component {



    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Code}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/team" exact component={Team}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/qrlogin" exact component={QrLogin}/>
                    <Route path="/map" exact component={MapBuy}/>
                    <Route path="*" exact component={Notfound}/>
                </Switch>


            </Router>
        )
            ;
    }
}

export default App;
