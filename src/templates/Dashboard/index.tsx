import { Header, HomeLayout, Logo } from "../Home/home.styled";
import {
  Div,
  Input,
  Textarea,
  Select,
  Main,
  Lista,
  InputBox,
  Button,
  Flex,
  Bar,
  Progress,
} from "./Dashboard.styled";
// import { mockNews } from './home.mocks'
import { Nav } from "@/components/Nav/Nav";
import { Typography } from "@/design-system/Typography";
import { LogoDefault } from "@/design-system/icons";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { useEffect, useState } from "react";
// import { Button } from "@/components/Button/Button";
import { ListOfPostCards } from "@/components/PostCard/ListOfPostCards";
import { PostCard } from "@/components/PostCard/PostCard";

import {
  addDoc,
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db, storage } from "../../configs/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { InputLogin } from "@/components/InputLogin/InputLogin";

export const Dashboard = () => {
  const {
    theme: { colors },
    changeTheme,
  } = useTheme();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "posts");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          createdAt: Timestamp.now().toDate(),
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            // createdBy:user.displayName,
            // userId:user.uid,
            // likes:[],
            // comments:[]
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  const handleDelete = async (imageUrl) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        toast("Article deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem("Token");
    // router.push("/");
  };

  return (
    <div data-testid="home">
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

      <div>
            <InputBox
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              placeholder="Titulo..."
            />

          <Textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            cols={30}
            rows={10}
            placeholder="Conteudo do post..."
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />

          {progress === 0 ? null : (
            <Bar className="progress">
              <Progress progress={progress}
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </Progress>
            </Bar>
          )}

          <Button
            onClick={handlePublish}
          >
            Publish
          </Button>
        </div>

        <div style={{ maxWidth: "500px" }}>
          {articles.length === 0 ? (
            <ListOfPostCards>
              <Typography type="h3">Nenhuma notícia encontrada!</Typography>
            </ListOfPostCards>
          ) : (
            <ListOfPostCards>
              {articles?.length > 0 &&
                articles.map((item) => (
                  <>
                    <Link href={`news/${item.id}`} key={item.id}>
                      <article>
                        <PostCard
                          imgUrl={item.card.imgUrl}
                          imgAlt={item.card.imgAlt}
                          title={item.title}
                          author={item?.author?.name ?? "-"}
                          category={item.category}
                          date={item.createdAt}
                        />
                      </article>
                    </Link>
                    <div>
                    <Button
                      className="fa fa-times"
                      onClick={() => handleDelete(item.card.imgUrl)}
                      style={{ cursor: "pointer" }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {}}
                    >
                      {" "}
                      Update
                    </Button>
                    {/* <Button onClick={() => {}}>
                      Delete
                    </Button> */}
                    </div>
                  </>
                ))}
            </ListOfPostCards>

            // articles.map((item) => {
            //   return (
            //     <div className="border mt-3 p-3 bg-light" key={item.id}>
            //       <div className="row">
            //         <div className="col-3">
            //           <img
            //             src={item.card.imgUrl}
            //             alt="title"
            //             style={{ height: 180, width: 180 }}
            //           />
            //         </div>
            //         <div className="col-9 ps-3">
            //           <div className="row">
            //             <div className="col-6"></div>
            //             <button
            //               className="fa fa-times"
            //               onClick={() => handleDelete(item.card.imgUrl)}
            //               style={{ cursor: "pointer" }}
            //             >
            //               aqui
            //             </button>
            //             {/* <div className="col-6 d-flex flex-row-reverse">
            //             <button id={id} imageUrl={imageUrl} />
            //         </div> */}
            //           </div>
            //           <h3>{item.title}</h3>
            //           <p>{item.createdAt}</p>
            //           <h5>{item.article}</h5>
            //         </div>
            //       </div>
            //     </div>
            //   );
            // })
          )}
        </div>

        
      </Main>

      <Nav />
    </div>
  );
};
