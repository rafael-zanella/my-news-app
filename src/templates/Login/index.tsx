import React, { useEffect, useState } from "react";
import { auth, provider } from "../../configs/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "./Login.styled";
import { useRouter } from "next/router";
import { InputBox, Main, Button, Flex } from "../Register/Register.styled";

export const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Token", response.user.accessToken);
        router.push("/home");
      })
      //TODO tratamento de erro melhor
      .catch((err) => {
        alert("Email ou senha invalidos");
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      console.log(response.user);
      router.push("/home");
    });
  };

  const singin = () => {
    router.push("/register");
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <Container className="loginPage">
      <Main>
      <h1>Login</h1>

        <InputBox
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
        />
        <InputBox
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />

        <Button onClick={signUp}>Sign In</Button>
        <hr />
        <Button onClick={signUpWithGoogle}>Sign Up with Google</Button>
        <br />
        <div>
          <p>Não tem uma conta: </p>
          <Button onClick={singin}>Sing in</Button>
        </div>
      </Main>
    </Container>
  );
};
