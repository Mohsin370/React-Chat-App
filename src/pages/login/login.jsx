import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './login.module.css';
import CustomCarousel from '../../components/carousel/carousel';
import {Link} from 'react-router-dom';
import ApiCall from '../../api/apiCalls';
import PubSub from 'pubsub-js'



class Login extends Component {

    state={
        Email:'',
        Password:'',
    }

    login = ()=>{
        const data={
            email:this.state.Email.toLowerCase(),
            password:this.state.Password,
        }
        ApiCall.login(data).then((res)=>{
            if(res.data.error==0){
                let userData={
                    email:res.data.user[0].email,
                    first_name:res.data.user[0].first_name,
                    last_name:res.data.user[0].last_name,
                    token:res.data.token,
                }
                localStorage.setItem('user',JSON.stringify(userData));
                this.props.history.push("/chat");
                PubSub.publish('refreshRoute', true);
            }else{
                console.log(res.data.error);
            }
        })

    }

    getEmail = (event)=>{
        this.setState({Email:event.target.value});
    }
    
    getPassword = (event)=>{
        this.setState({Password:event.target.value});
    }

    render() {
        return (
            <Row>
                <Col span={13} className={styles.leftColSignIn} >
                    <CustomCarousel></CustomCarousel>
                </Col>

                <Col span={11} className={styles.rightColSignIn}>
                    <Row className={styles.logo}>
                        Logo
                    </Row>
                    <Row className={styles.Logincontainer}>
                        <Col span={15} style={{ margin: "auto" }}>
                            <h1>Login</h1>
                            <div className={styles.loginSubcontainer} >
                          

                                <p className={styles.inputTitle}>Email</p>
                                <input className={styles.inputGlobal} placeholder="Enter Email Here" onChange={this.getEmail}></input>

                                <Row className={styles.flexSpace}>
                                    <Col gutter={{xs:18, lg:16}} >
                                        <p className={styles.inputTitle}>Password</p>
                                    </Col>
                                    <Col gutter={{xs:6, lg:8}}className="float-right">
                                        <p className={styles.forgotPasswordText}> Forgot password?</p>
                                    </Col>
                                </Row>
                                <input type="password" className={styles.inputGlobal} placeholder="Enter Password" onChange={this.getPassword}></input>
                                <div className="text-center">
                                    <button className={styles.loginButton} onClick={this.login}>Login</button>
                                </div>
                                
                            </div>

                            <div className={styles.createNew}>
                                <p>Don't have an account? <span><Link to="/signup"><span className={styles.createAccount}>Create an account</span></Link></span></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Login;
