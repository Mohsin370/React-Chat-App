import { Row, Col} from 'antd';
import React, { Component } from 'react';
import styles from './login.module.css';
import CustomCarousel from '../../components/carousel/carousel';
import {Link} from 'react-router-dom';
import Api from '../../api/apiCalls';


class Login extends Component {
  
  state={
    
  }
  
  render() {
   const login = ()=>{
        const data = {
          email: this.state.email,
          password: this.state.password,
        }

        Api.login(data).then((res)=>{
          console.log(res);
        })
    }


    return (
      <Row>
        <Col span={14} className={styles.leftColSignIn}>
          <CustomCarousel></CustomCarousel>
        </Col>

        <Col span={10} className={styles.rightColSignIn}>
          <Row className={styles.logo}>
            Logo
          </Row>
          <Row className={styles.Logincontainer}>
            <Col span={15} style={{ margin: "auto" }}>
              <h1>Login</h1>
              <div className={styles.loginSubcontainer} >
                <p className={styles.inputTitle}>Email</p>
                <input className={styles.inputGlobal} placeholder="Enter Email" onChange={(event)=>{this.setState({email:event.target.value})}}></input>

                <div className={styles.flexSpace}>
                  <p className={styles.inputTitle}>Password</p>
                  <p className={styles.forgotPasswordText}> Forgot password?</p>
                </div>
                <input type="password" className={styles.inputGlobal} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Enter Password"></input>
                <button className={styles.loginButton} onClick={login}>Login</button>
              </div>

              <div className={styles.createNew}>
                <p>Don't have an Account yet? <span><Link to="/signup"><span className={styles.createAccount}>Create an Account</span></Link></span></p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Login;
