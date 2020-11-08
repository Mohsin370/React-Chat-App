import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './signup.module.css';
import CustomCarousel from '../../components/carousel/carousel';
import { Link } from 'react-router-dom';
import ApiCall from '../../api/apiCalls';



class Signup extends Component {


    state = {
        Email: '',
        Password: '',
        FirstName :'',
        LastName :'',

    }

    Signup = () => {
        const data = {
            email: this.state.Email,
            password: this.state.Password,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,

        }
        ApiCall.signup(data).then((res)=>{
            if(res.data.error === 0 ){
                console.log(this.props);
                this.props.history.push('/login')
            }else{

            }
        });

    }

    getEmail = (event) => {
        this.setState({ Email: event.target.value });
    }

    getPassword = (event) => {
        this.setState({ Password: event.target.value });
    }

    
    getFirstName = (event) => {
        this.setState({ FirstName: event.target.value });
    }

    getLastName = (event) => {
        this.setState({ LastName: event.target.value });
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
                    <Row className={styles.Signupcontainer}>
                        <Col span={15} style={{ margin: "auto" }}>
                            <h1>Signup</h1>
                            <div className={styles.signupSubcontainer} >
                                <Row>
                                    <Col span={11}>
                                        <p className={styles.inputTitle}>First Name</p>
                                        <input className={styles.inputGlobal} placeholder="First Name"  onChange={this.getFirstName}></input>
                                    </Col>
                                    <Col span={1}>
                                    </Col>
                                    <Col span={11}>
                                        <p className={styles.inputTitle}>Last Name</p>
                                        <input className={styles.inputGlobal} placeholder="Last Name"  onChange={this.getLastName}></input>
                                    </Col>
                                </Row>

                                <p className={styles.inputTitle}>Email</p>
                                <input className={styles.inputGlobal} placeholder="Enter Email Here"  onChange={this.getEmail}></input>

                                <Row className={styles.flexSpace}>
                                    <Col gutter={{ xs: 18, lg: 16 }} >
                                        <p className={styles.inputTitle}>Password</p>
                                    </Col>
                                    <Col gutter={{ xs: 6, lg: 8 }} className="float-right">
                                        <p className={styles.forgotPasswordText}> Forgot password?</p>
                                    </Col>
                                </Row>
                                <input type="password" className={styles.inputGlobal} placeholder="Enter Password"  onChange={this.getPassword}></input>
                                <div className="text-center">
                                    <button className={styles.signupButton} onClick={this.Signup}>Signup</button>
                                </div>

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
