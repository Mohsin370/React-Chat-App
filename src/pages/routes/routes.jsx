import React, { Component } from 'react'
import { BrowserRouter as  Router,Route,Switch } from 'react-router-dom';
import Login from '../login/login'
import Signup from '../signup/signup';
import Main from '../Main'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/signup' exact component={Signup}></Route>
                    <Route path='/chat' exact component={Main}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;