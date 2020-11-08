import React, { Component } from 'react'
import { BrowserRouter as  Router,Redirect,Route,Switch } from 'react-router-dom';
import Login from '../login/login'
import Signup from '../signup/signup';
import Main from '../Main'
import PubSub from 'pubsub-js'

class Routes extends Component {

    state={
        privateRouteisActive:false
    }
    componentDidMount(){
        if(localStorage.getItem('user')){
            this.setState({
                privateRouteisActive:true
            })
        }else{
            this.setState({
                privateRouteisActive:false
            })
        }
    }
    render() {

        PubSub.subscribe('refreshRoute',()=>{
            if(localStorage.getItem('user')){
                this.setState({
                    privateRouteisActive:true
                })
            }else{
                this.setState({
                    privateRouteisActive:false
                })
            }   
        })

        return (
            <Router>
            {this.state.privateRouteisActive?
                <Switch>
                    <Route path='/' exact component={Main}></Route>
                    <Route path='/chat' exact component={Main}></Route>
                    <Redirect to="/chat"></Redirect>
                </Switch>:
                <Switch>
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/signup' exact component={Signup}></Route>
                    <Redirect to="/login"></Redirect>

                </Switch>
                }
            </Router>
        )
    }
}

export default Routes;