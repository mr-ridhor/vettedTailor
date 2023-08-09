import axios from "axios";

const url='https://fitted-portal-api.herokuapp.com/api/v1/bank'
const Auth = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    //   Authorization: token,
    },
  });
  export default Auth;