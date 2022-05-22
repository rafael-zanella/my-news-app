import React from "react";
import { auth, provider } from "../../configs/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from './Login.styled'


export const Login = ({ setIsAuth }) => {
  // let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      // navigate("/");
    });
  };

  return (
    <Container className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </Container>
  );
}
