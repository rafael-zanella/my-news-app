import { Header, HomeLayout, Logo } from "../Home/home.styled";
import { Div, Input, Textarea, Select } from "./Dashboard.styled";
// import { mockNews } from './home.mocks'
import { Nav } from "@/components/Nav/Nav";
import { Typography } from "@/design-system/Typography";
import { LogoDefault } from "@/design-system/icons";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import {
  addDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db, storage } from "../../configs/firebase";
import { ref, uploadBytes } from "firebase/storage";

export const Dashboard = () => {
  const {
    theme: { colors },
    changeTheme,
  } = useTheme();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getPosts();
  }, []);

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      //informaçõe do autor
    });
  };

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Imagem Upload");
    });
  };

  return (
    <HomeLayout data-testid="home">
      <Header>
        <Logo>
          <LogoDefault fill={colors.onBackgroundColor} onClick={changeTheme} />
          <Typography type="h2" fontWeight={700}>
            Adicionar Post
          </Typography>
        </Logo>
      </Header>

      <main>
        <Div>
          <form action="">
            <Input
              type="text"
              placeholder="titulo do post..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />

            <Textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="conteudo do post..."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></Textarea>
            {/* wip map pegar as categorias */}
            <Select className="select">
              <option value="1">Categorias</option>
              <option value="2">Business</option>
              <option value="3">World</option>
            </Select>

            {/* wip estilizar input file */}
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button onClick={() => uploadImage()}>Upload</button>

            <Button label="Publicar" onClick={() => createPost()} />
            {/* <button onClick={() => createPost()}>PUBLICAR</button> */}
          </form>
        </Div>
      </main>

      <Nav />
    </HomeLayout>
  );
};
