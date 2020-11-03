import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './signup.module.css';
import CustomCarousel from '../../components/carousel/carousel';
import {Link} from 'react-router-dom';


class Signup extends Component {
    render() {
        return (
            <Row>
                <Col span={11} className={styles.leftColSignIn} >
                    <CustomCarousel></CustomCarousel>
                </Col>

                <Col span={13} className={styles.rightColSignIn}>
                    <Row className={styles.logo}>
                        Logo
                    </Row>
                    <Row className={styles.Signupcontainer}>
                        <Col span={15} style={{ margin: "auto" }}>
                            <h1>Signup</h1>
                            <div className={styles.signupSubcontainer} >
                                <Row>
                                    <Col span={11}>
                                        <p className={styles.inputTitle}>First Name</p>
                                        <input className={styles.inputGlobal} placeholder="First Name"></input>
                                    </Col>
                                    <Col span={1}>
                                    </Col>
                                    <Col span={11}>
                                        <p className={styles.inputTitle}>Last Name</p>
                                        <input className={styles.inputGlobal} placeholder="Last Name"></input>
                                    </Col>
                                </Row>

                                <p className={styles.inputTitle}>Username</p>
                                <input className={styles.inputGlobal} placeholder="Enter Username Here"></input>

                                <Row className={styles.flexSpace}>
                                    <Col span={16}>
                                        <p className={styles.inputTitle}>Password</p>
                                    </Col>
                                    <Col span={8}>
                                        <p className={styles.forgotPasswordText}> Forgot password?</p>
                                    </Col>
                                </Row>
                                <input type="password" className={styles.inputGlobal} placeholder="Enter Password"></input>



                                <button className={styles.signupButton}>Signup</button>
                            </div>

                            <div className={styles.createNew}>
                                <p>Already have an account? <span><Link to="/login"><span className={styles.createAccount}>Login now</span></Link></span></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Signup;
