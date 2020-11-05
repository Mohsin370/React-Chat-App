const userModel = require("../models/users");
var jwt = require("jsonwebtoken");


const signup = async (req, res) => {
  let signupResult = await userModel.signup(req.body);
  res.send(signupResult);
};

const signin = async (req, res) => {
  let signinResult = await userModel.signin(req.body);
  res.send(signinResult);
};

const getProducts = async (req, res) => {

  //validate Token
  let token_email  = await jwt.verify(req.body.data.token,'secret_key');

  if(token_email && token_email === req.body.data.email){
    let getProducts =  await userModel.getProducts(req.body.data.email);
    res.send(getProducts);
  }else{
    res.send("Invalid Token, Login again");
  }


  // let getProducts = await userModel.getProducts(req.body);
  // res.send(getProducts);
};

module.exports = {
  signup: signup,
  signin: signin,
  getProducts: getProducts,
};
