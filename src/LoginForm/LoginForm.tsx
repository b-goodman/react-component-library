import React, {FunctionComponent, useState, useEffect} from "react";

import "./LoginForm.scss";

interface Props {
  onSubmit: (credentials: Credentials) => void;
  authentication?: {
    status: boolean,
    message: string
  };
}

interface Credentials {
  username: string;
  password: string;
}

interface Validation {
  username: boolean;
  password: boolean;
}

interface FieldErrMsg {
  username: string;
  password: string;
}

const LoginForm: FunctionComponent<Props> = ({onSubmit, authentication}) => {

  const [state, setState] = useState<Credentials>({username: "", password: ""});

  const [isValid, setValid] = useState<Validation>({username: true, password: true});

  const [errMsg, setErrMsg] = useState<FieldErrMsg>({username: "", password: ""});

  useEffect(() => {
    setValid({username: authentication.status, password: authentication.status });
    setErrMsg({username: authentication.message, password: authentication.message});
    setState({username: "", password: ""})
  }, [authentication.status])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const validateInputLength = () => {
    setValid({username: state.username.length > 0, password: state.password.length > 0 });
    setErrMsg({username: state.username.length > 0 ? "" : "Field is Required", password: state.password.length > 0 ? "" : "Field is Required"});
    return Object.values(isValid).every( (el) => !el)
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (validateInputLength()) {
      console.log("submitting")
      onSubmit(state)
    } else {
      console.log("invalid input length")
    }
  }

  return (
    <div className={`login-form`}>

      <div className={`input-group ${isValid.username ? '' : 'invalid'}`}>
        <input
          type="string"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleInput}
        />
        <div className="error-message">{errMsg.username}</div>
      </div>

      <div className={`input-group ${isValid.password ? '' : 'invalid'}`} >
        <input
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleInput}
        />
        <div className="error-message">{errMsg.password}</div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>

    </div>
  )

};

export default LoginForm;
