import { Container, GoogleContainer } from "./Register.styled";
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
import { GoogleLogoWithBorder } from "@/design-system/icons";

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
      <main style={{ margin: "0 20%" }}>
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
              Já tem uma conta:{" "}
            </p>
            <Button label="Sign In" onClick={login} />
          </div>
        </div>

        <a
          href="#"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          TERMOS E CONDIÇÕES
        </a>
      </main>
    </Container>
  );
};
