import { async } from "@firebase/util";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import AuthUser from "../../../hook/AuthUser";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
const Posts = () => {
  const { db, usr } = AuthUser();
  let userChatRef = collection(db, "postuser");
  const [chatsSnapshot] = useCollection(userChatRef);
  const data = chatsSnapshot?.docs.map((chat) => chat?.data());
  let number = 1;
  return (
    <div>
      {data?.map((data) => (
        <Post data={data} key={number++} userEmail={usr.email}></Post>
      ))}
    </div>
  );
};

export default Posts;
