import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineMood } from "react-icons/md";
import AuthUser from "../../../hook/AuthUser";
import {
  stroage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../../../firebase";

const InputBox = () => {
  const { usr, db } = AuthUser();

  const postInput = useRef();
  const postFile = useRef();

  const [progress, setProgress] = useState(Number);
  const [postImage, setApostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    const file = postFile.current.files[0];

    if (!postInput.current.value) return;
    if (!postFile.current.files[0]) return;

    if (postInput.current.value) {
      const postUserRef = collection(db, "postuser");
      const data = {
        displayName: usr.displayName,
        email: usr.email,
        post: postInput.current.value,
        lastSeen: serverTimestamp(),
        photoURL: usr.photoURL,
      };
      addDoc(postUserRef, data, { merge: true })
        .then((uploadData) => {
          const storageRef = ref(stroage, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(progress);
            },
            (err) => {
              console.log(err);
            },
            // photo downloadURL 3th callbacek function
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const data = {
                  imagePost: downloadURL,
                };
                setDoc(doc(postUserRef, uploadData.id), data, {
                  merge: true,
                })
                  .then(() => {
                    setProgress("");
                  })
                  .catch(alert);
              });
            }
          );
        })
        .catch(alert);
    }

    postInput.current.value = "";
  };

  /*   const uploadAPostFilePhoto = (file) => {
    const storageRef = ref(stroage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      // photo downloadURL 3th callbacek function
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setApostImage(downloadURL);
        });
      }
    );
  }; */
  return (
    <div className="shadow-md rounded p-4 mt-5 bg-white ">
      <form onSubmit={sendPost}>
        <div className="flex gap-2 items-center">
          {" "}
          <Image
            src={usr?.photoURL}
            width={45}
            height={35}
            layout="fixed"
            className="rounded-full"
          ></Image>
          <input
            type="text"
            ref={postInput}
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-full placeholder-gray-700 rounded-full px-3 py-3 outline-none "
            placeholder="What's on you mind, Md?"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            post
          </button>
        </div>
      </form>

      <div class=" bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress ? progress.toFixed(1) : "2"}%` }}
        >
          {progress ? progress : "0"}%
        </div>
      </div>

      <hr className="my-3" />
      <div className="flex justify-around">
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <FaVideo className="text-red-500 text-2xl" />
          <h1 className="text-md font-semibold">Video</h1>
        </div>
        <div
          onClick={() => postFile.current.click()}
          className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md "
        >
          <IoMdPhotos className="text-green-500 text-2xl" />
          <h1 className="text-md mb-1  font-semibold">Photo</h1>
          <input type="file" ref={postFile} hidden className="input" />
        </div>
        <div className="flex items-center  gap-1 px-3 py-8 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <MdOutlineMood className="text-yellow-500 text-2xl" />
          <h1 className="text-md font-semibold">Share</h1>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
