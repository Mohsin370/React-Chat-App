import React, { Component } from 'react'
import styles from './Main.module.css';
import { Row, Col,  } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import LeftMenu from './LeftMenu/LeftMenu';
import Chat from './ChatModule/Chat'
class Main extends Component {

    render() {
        return (
            <Row className={styles.container}>
                <Col span={5} style={{ backgroundColor: '' }}>
                    <LeftMenu></LeftMenu>
                </Col>
                <Col span={13} style={{ backgroundColor: '' }}>
                    <Chat></Chat>
                </Col>
                <Col span={6} style={{ backgroundColor: '' }}></Col>
            </Row>
        )
    }

}


export default Main;