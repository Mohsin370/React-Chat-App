import Environment from "../environments/environment";
import Axios from "axios";

const Login = (data) => {
  return Axios.post(`${Environment.BaseURL}/login`, { data });
};
const Signup = (data) => {
  return Axios.post(`${Environment.BaseURL}/signup`, { data });
};

const Api = {
  login: Login,
  signup: Signup,
};

export default Api;
