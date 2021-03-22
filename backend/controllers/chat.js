const chatModel = require("../models/chat");
const jwt = require('jsonwebtoken');

const getallusers = async (req, res) => {
    console.log("Tokrn: ",req.body.data.token);
  let token_email  = await jwt.verify(req.body.data.token,'secret_key');
    console.log("Token Email: ",token_email)
  
  if(token_email && token_email === req.body.data.email){
    let allusers = await chatModel.getallusers(req.body);
    res.send(allusers);
  }else{
    res.send("Invalid Token, Login again");
  }


};


const getUserConversations = async (req,res)=>{

  let UserConversations = await chatModel.getUserConversations(req.body);
  if(UserConversations){
    res.send({error:0,UserConversations});
  }else{
    res.send({error:1, msg:'No Conversations Found' })
  }

}

module.exports = {
  getallusers: getallusers,
  getUserConversations: getUserConversations,
};
