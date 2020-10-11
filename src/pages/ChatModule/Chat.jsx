import React, { Component } from 'react'
import styles from './chat.module.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import TextMessage from '../../components/textMessage/textMessage';
const Messages = [
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},

    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Sender', sender:true, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
    {Message:'Hello from Receiver', sender:false, Image:''},
]
class Chat extends Component {

    render() {
        return (
            <React.Fragment>
                <Row className={styles.container}>
                    <Col span={24} className={styles.chatContainer}>
                        {Messages.map((item,index)=>{
                            return(
                        <TextMessage MessageData  = {item}></TextMessage>
                            )
                    })}
                    </Col>
                    <Col span={22} className={styles.MessageBox}>
                        <Input placeholder="Enter Message Here" onSearch={value => console.log(value)} enterButton />
                        <Button type="primary" size="large">
                            Send
                        </Button>
                    </Col>
                </Row>
               
            </React.Fragment>
        )
    }
}


export default Chat;