import React, { Component } from 'react'
import styles from './textmessage.module.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class TextMessage extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.MessageData.sender ?
                    <div className={styles.receiverMessageClass}>
                        <Avatar size={34} icon={<UserOutlined />} src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8" />
                        <div className={styles.receiverMessage}>
                            <p> {this.props.MessageData.Message}</p>
                        </div>
                    </div>
                    : <div className={styles.senderMessageClass}>
                        <div className={styles.senderMessage}>
                            <p> {this.props.MessageData.Message}</p>
                        </div>
                        <Avatar size={34} icon={<UserOutlined />} src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8" />
                       </div>
                }
            </React.Fragment>
        )
    }

}


export default TextMessage;