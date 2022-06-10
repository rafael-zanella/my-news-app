import { Container, GoogleContainer, Main, Or, A } from "./Register.styled";
import { auth } from "../../configs/firebase";
import { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { LogoLogin } from "@/components/LogoLogin/LogoLogin";
import { InputLogin } from "@/components/InputLogin/InputLogin";
import { Button } from "@/components/Button/Button";

export const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem("Token", response.user.accessToken);
        router.push("/home");
      })
      .catch((err) => {
        alert("Email Already Exists");
        setEmail("");
        setPassword("");
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      console.log(response.user.accessToken);
      router.push("/home");
    });
  };

  const login = () => {
    router.push("/login");
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <Container>
      <LogoLogin />
      <Main>
        <InputLogin
          id="Email"
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <InputLogin
          id="Senha"
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <Button label="Sign Up" onClick={signUp} />

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
              Registrar com Google
            </button>
            </GoogleContainer>
          </div>

          <div>
            <span style={{fontSize: "13px"}}>ou </span><A href="/register" onClick={login}>Entre</A>
          </div>
        </div>

        <A
          href="#"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          TERMOS E CONDIÇÕES
        </A>
      </Main>
    </Container>
  );
};
