import React, {useState} from "react";
import LoginForm from "./LoginForm";

export default {
  title: "LoginForm"
};

export const ValidateInput = () => <LoginForm authentication={{status: true, message: ""}} onSubmit={ (credentials) => {console.log(credentials)} } />;


export const ValidateAuthentication = () => {

  const [auth, setAuth] = useState({status: true, message: ""});

  const handleSubmission = (credentials) => {
    console.log(credentials);
    if ( !(credentials.username === "test" && credentials.password === "test")) {
      setAuth({status: false, message: "Username or password is incorrect"});
      console.log("not authenticated");
    } else {
      setAuth({status: true, message: ""});
      console.log("authenticated")
    }
  }

  return <LoginForm authentication={auth} onSubmit={handleSubmission} />;
}

