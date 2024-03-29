import React, { Component } from "react";
import { Row, Col } from "antd";
import styles from "./LeftMenu.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import PubSub from "pubsub-js";
import ApiCall from "../../api/apiCalls";
import { connect } from "react-redux";

const { Panel } = Collapse;

let FirstName = "";
let LastName = "";

class LeftMenu extends Component {

  componentWillMount() {
    let userData = JSON.parse(localStorage.getItem("user"));

    console.log(userData);
    if (userData) {
      this.getallusers(userData);

      FirstName = userData.first_name;
      LastName = userData.last_name;
    }

  }

  getallusers = (userData) => {
    console.log(userData);
    const data = {
      email: userData.email,
      token: userData.token,
    };
    ApiCall.getallusers(data).then((res) => {
      console.log(res);
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    PubSub.publish("refreshRoute", true);
  };
  SelectReceiver = (user) => {
    if (!user.isActive) {
      this.props.Conversations.map((item) => {
        item.isActive = false;
      });
      user.isActive = true;

      // this.setState({ Conversations: arr });
      PubSub.publish("Receiver", user);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={20} className={styles.col1Heading}>
            <div className={styles.logo}>
              <img
                alt="messenger"
                src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=1024&h=1024"
              />
            </div>
            <div className={styles.Heading}>
              <h1>Quick Chat</h1>
            </div>
          </Col>
        </Row>

        <Row className={styles.secondRow}>
          <Col span={20} className={styles.Card}>
            <div style={{ marginTop: "8%" }}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/47482767_2049823101782011_378499975849443328_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEeVtkDElDLEpNqVNGg49aa3OYJvYguTHLc5gm9iC5Mctc4iH6nAwJUMI4jXVVLYMFcrdGpBlIVEwuh7Uhsirui&_nc_ohc=zeq9lKBB6UsAX-s15S6&_nc_ht=scontent.flhe3-1.fna&oh=d1fc8372766af6e7c324603a4e669937&oe=5FA962D8"
              />
            </div>
            <h1>
              {" "}
              {FirstName} {LastName}{" "}
            </h1>
            <p style={{ lineHeight: "0" }}> Jr. Angular Developer</p>
            <Link to="/login" onClick={this.logout}>
              <span>Logout</span>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col span={20} style={{ margin: "auto" }}>
            <Collapse defaultActiveKey={["1"]} className={styles.Collapse}>
              <Panel header="Conversations" className={styles.Panel} key="1">
                {this.props.Conversations.map((item) => {
                  return (
                    <div
                      style={{}}
                      className={
                        item.isActive ? styles.ActiveChat : styles.notActiveChat
                      }
                      onClick={() => this.props.SelectReceiver(item)}
                    >
                      <Avatar
                        size={44}
                        icon={<UserOutlined />}
                        src={item.image}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "95%",
                        }}
                      >
                        <p style={{ marginLeft: "10px" }}>{item.name}</p>
                        {item.Messages !== "0" ? (
                          <Badge count={item.Messages}></Badge>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Conversations: state.Conversations,
  };
};

const mapDispatchToProps = (dispatch) => {

    return{
        SelectReceiver:(user)=>{
            dispatch({
                type:"SelectReceiver",
                user,
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
