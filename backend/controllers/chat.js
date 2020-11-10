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

module.exports = {
  getallusers: getallusers,
};
