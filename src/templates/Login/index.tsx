import React, { useEffect, useState } from "react";
import { auth, provider } from "../../configs/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Container, GoogleContainer, Main, Or, A } from "./Login.styled";
import { useRouter } from "next/router";
import { InputLogin } from "@/components/InputLogin/InputLogin";
import { Button } from "@/components/Button/Button";
import { LogoLogin } from "@/components/LogoLogin/LogoLogin";

export const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
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

  const singUp = () => {
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
      <LogoLogin />
      <Main>
        <InputLogin
          id="Email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
        />

        <InputLogin
          id="Senha"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />

        <Button label="Sign In" onClick={signIn} />

        <Or></Or>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <GoogleContainer>
            <button type="button" className="login-with-google-btn" onClick={signUpWithGoogle}>
              Logar com Google
            </button>
            </GoogleContainer>
          </div>

          <div>
            <span style={{fontSize: "13px"}}>ou </span><A href="/register" onClick={singUp}>Cadastre-se</A>
          </div>
        </div>
      </Main>
    </Container>
  );
};
