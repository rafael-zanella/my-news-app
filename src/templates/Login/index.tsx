import React, { useEffect, useState } from "react";
import { auth, provider } from "../../configs/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Container, GoogleContainer } from "./Login.styled";
import { useRouter } from "next/router";
import { InputLogin } from "@/components/InputLogin/InputLogin";
import { Button } from "@/components/Button/Button";
import { GoogleLogoWithBorder } from "@/design-system/icons";
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
      <main style={{ margin: "0 20%" }}>
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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "150px" }}>
            <p style={{ textAlign: "center" }}> ou entre com</p>

            <GoogleContainer>
              <button
                type="submit"
                variant="contained"
                color="primary"
                onClick={signUpWithGoogle}
                style={{ border: "none", background: "none" }}
              >
                <GoogleLogoWithBorder
                  data-testid="button_login_google_logo"
                  stroke="black"
                  width="15%"
                  height="100%"
                />
              </button>
            </GoogleContainer>
          </div>

          <div style={{ width: "150px" }}>
            <p style={{ textAlign: "center", marginBottom: "10px" }}>
              Não tem uma conta:
            </p>
            <Button label="Sign Up" onClick={singUp} />
          </div>
        </div>
      </main>
    </Container>
  );
};
