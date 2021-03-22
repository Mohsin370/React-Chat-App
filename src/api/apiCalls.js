import Environment from "../environments/environment";
import Axios from "axios";

const Login = (data) => {
  return Axios.post(`${Environment.BaseURL}/login`, { data });
};
const Signup = (data) => {
  return Axios.post(`${Environment.BaseURL}/signup`, { data });
};

const getallusers = (data) =>{
  console.log("Get all users data: ",data);
  return Axios.post(`${Environment.BaseURL}/getallusers`,{data});
}

const Api = {
  login: Login,
  signup: Signup,
  getallusers: getallusers,
};

export default Api;
