import React, { Component } from 'react'
import styles from './chat.module.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import TextMessage from '../../components/textMessage/textMessage';
import socketClient from 'socket.io-client';
import PubSub from 'pubsub-js';


let Messages = [];
let socketConn;


class Chat extends Component {

    state={
        receiver:''
    }
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    componentDidMount() {
        socketConn = socketClient.connect('http://localhost:4000');
        let sender = JSON.parse(localStorage.getItem('user'));
        if(sender){

            socketConn.emit('user_connect',sender.email);
            socketConn.on('Chat:receive', (data) => {
                console.log("Message Data: ", data.message);
                Messages.push({ Message: data.message, sender: false, Image: '' });
                this.setState({ RefreshMessages: true });
            })
        }
    }
    state = {
        Message: '',
        RefreshMessages: '',
    }
    setMessageState = (event) => {
        this.setState({ Message: event.target.value })
    }

    sendMessage = (event) => {
        let sender = JSON.parse(localStorage.getItem('user'));
        console.log('hi')
     
        if (event.key === 'Enter' || event === 'send') {
            socketConn.emit('private_chat', {
                sender: sender.email,
                message: this.state.Message,
                receiver:this.state.receiver,
            })
            Messages.push({ Message: this.state.Message, sender: true, Image: '' });
            this.setState({ RefreshMessages: true });
            this.textInput.current.state.value = ''
        }
    }

    render() {
        PubSub.subscribe('Receiver',(msg,user)=>{
            console.log("Hey ",user.name);
            Messages =[];
            this.setState({receiver:user.name.toLowerCase()});
        });
        return (
            <React.Fragment>
                <Row className={styles.container}>
                    <Col span={24} className={styles.chatContainer}>
                        {Messages.map((item, index) => {
                            return (
                                <TextMessage MessageData={item}></TextMessage>
                            )
                        })}
                    </Col>
                    <Col span={22} className={styles.MessageBox}>
                        <Input placeholder="Enter Message Here" ref={this.textInput} onKeyDown={(event) => { this.sendMessage(event) }} onChange={this.setMessageState} onSearch={value => console.log(value)}  />
                        <Button type="primary" size="large" onClick={() => this.sendMessage('send')} >
                            Send
                        </Button>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}


export default Chat;