import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './login.module.css';
import CustomCarousel from '../../components/carousel/carousel';
import {Link} from 'react-router-dom';


class Login extends Component {
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
                                <input className={styles.inputGlobal} placeholder="Enter Email Here"></input>

                                <Row className={styles.flexSpace}>
                                    <Col gutter={{xs:18, lg:16}} >
                                        <p className={styles.inputTitle}>Password</p>
                                    </Col>
                                    <Col gutter={{xs:6, lg:8}}className="float-right">
                                        <p className={styles.forgotPasswordText}> Forgot password?</p>
                                    </Col>
                                </Row>
                                <input type="password" className={styles.inputGlobal} placeholder="Enter Password"></input>
                                <div className="text-center">
                                    <button className={styles.loginButton}>Login</button>
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
