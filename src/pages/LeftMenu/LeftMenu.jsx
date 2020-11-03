import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styles from './LeftMenu.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const arr = [
    { name: 'Hamza', image: 'https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8', Messages: '0' },
    { name: 'Mohsin', image: 'https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8', Messages: '3' }

]

class LeftMenu extends Component {

    render() {
        return (

            <React.Fragment>
                <Row>
                    <Col span={20} className={styles.col1Heading}>
                        <div className={styles.logo}>
                            <img alt="messenger" src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=1024&h=1024" />
                        </div>
                        <div className={styles.Heading}>
                            <h1>Quick Chat</h1>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.secondRow}>
                    <Col span={20} className={styles.Card}>
                        <div style={{ marginTop: '8%' }}>
                            <Avatar size={64} icon={<UserOutlined />} src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8" />
                        </div>
                        <h1> Khawaja Mohsin </h1>
                        <p style={{ lineHeight: '0' }}> Jr. Angular Developer</p>
                        <p style={{ lineHeight: '1.6' }}> I can start fires with what i feel for you</p>

                    </Col>
                </Row>

                <Row>
                    <Col span={20} style={{ margin: 'auto' }}>

                        <Collapse className={styles.Collapse} >
                            <Panel header="Conversations" className={styles.Panel} key="1">

                                {arr.map((item) => {

                                    return (
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom:'15px' }}>
                                            <Avatar size={44} icon={<UserOutlined />} src={item.image} />
                                            <p style={{ marginLeft: '10px' }}>{item.name}</p>
                                            <div style={{ marginLeft: '35%', marginTop: '-10px' }}>
                                                {item.Messages !== '0' ? <Badge count={5} >
                                                </Badge> : ''}

                                            </div>
                                        </div>)
                                })}

                            </Panel>
                        </Collapse>

                    </Col>
                </Row>
            </React.Fragment>

        )
    }

}

export default LeftMenu;