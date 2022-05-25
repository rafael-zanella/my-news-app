import { Header, HomeLayout, Logo } from "../Home/home.styled";
import { Div, Input, Textarea, Select } from "./Dashboard.styled";
import { InputBox, Main, Button, Flex } from "../Register/Register.styled";
// import { mockNews } from './home.mocks'
import { Nav } from "@/components/Nav/Nav";
import { Typography } from "@/design-system/Typography";
import { LogoDefault } from "@/design-system/icons";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { useEffect, useState } from "react";
// import { Button } from "@/components/Button/Button";
import { addDoc, getDocs, collection, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";

export const Dashboard = () => {
  const {
    theme: { colors },
    changeTheme,
  } = useTheme();

  const [postID, setPostID] = useState('');
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [fireData, setFireData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const databaseRef = collection(db, "CRUD Data");

  let router = useRouter();
  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (token) {
      getData();
    }
    if (!token) {
      router.push("/register");
    }
  }, []);

  const addData = () => {
    addDoc(databaseRef, {
      title,
      postText,
    })
      .then(() => {
        alert("Data Sent");
        getData()
        setTitle("");
        setPostText("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setFireData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  // const getID = (id, title, postText) => {
  //   setPostID(id);
  //   setTitle(title);
  //   setPostText(postText);
  //   setIsUpdate(true);
  // };

  // const updateFields = (postID: string) => {
  //   let fieldToEdit = doc(db, "CRUD Data", postID);
  //   updateDoc(fieldToEdit, {
  //     title,
  //     postText,
  //   })
  //     .then(() => {
  //       alert("Data Updated");
  //       getData();
  //       setTitle("");
  //       setPostText("");
  //       setIsUpdate(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteDocument = (id) => {
    let fieldToEdit = doc(db, 'CRUD Data', id);
    deleteDoc(fieldToEdit)
    .then(() => {
      alert('Data Deleted')
      getData()
    })
    .catch((err) => {
      alert('Cannot Delete that field..')
    })
  }

  const logout = () => {
    sessionStorage.removeItem('Token')
    router.push('/')
  }

  return (
    <HomeLayout data-testid="home">
      <Header>
        <Logo>
          <LogoDefault fill={colors.onBackgroundColor} onClick={changeTheme} />
          <Typography type="h2" fontWeight={700}>
            Adicionar Post
          </Typography>
        </Logo>
        <Button onClick={logout}>Log out</Button>
      </Header>

      <Main>
        <InputBox
          placeholder="Name"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Textarea
          value={postText}
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="conteudo do post..."
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        ></Textarea>

        {isUpdate ? (
         <Button 
        //  onClick={updateFields}
         >UPDATE</Button>
        ) : (
          <Button onClick={addData}>ADD</Button>
        )}

        <div>
          {fireData.map((data) => {
            return (
              <Flex>
                <h3>Title: {data.title}</h3>
                <p>Post: {data.postText}</p>
                {/* <Button
                  onClick={() => getID(data.id, data.title, data.postText)}
                >
                  Update
                </Button> */}
                <Button onClick={() => deleteDocument(data.id)}>Delete</Button>
              </Flex>
            );
          })}
        </div>
      </Main>

      <Nav />
    </HomeLayout>
  );
};
