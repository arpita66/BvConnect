import "./login.css";
import { useContext, useRef } from "react";
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

  
export default function Login() {
  
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch                                 
    );
  };

    return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BvConnect</h3>
          <span className="loginDesc">
            Connect with the Banasthali world on BvConnect.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit ={handleClick}>
            <input 
            placeholder="Email" 
            type="email" 
            className="loginInput" 
            required
            ref={email} />
            <input 
            placeholder="Password" 
            type="password" 
            className="loginInput" 
            ref={password}
            required
            minLength="8" />
            <button className="loginButton" type="submit" disabled={isFetching}>
            {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}