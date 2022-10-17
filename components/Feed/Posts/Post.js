import { GoComment } from "react-icons/go";
import { BsCamera, BsEmojiSmile, BsSearch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Post = ({ data, userEmail }) => {
  const [countLike, setCountLike] = useState(0);
  const userlikeremovepost = data?.userEmailLike?.find(
    (data) => data == userEmail
  );
  console.log(userlikeremovepost);
  const postLike = (countLike) => {
    if (countLike <= 1 && !userlikeremovepost) {
      setCountLike(2);
      const emailass = data?.userEmailLike;
      const postUserRef = collection(db, "postuser");
      setDoc(
        doc(postUserRef, data?.postId),
        {
          like: data?.like + 1,
          userEmailLike: [...emailass, userEmail],
        },
        {
          merge: true,
        }
      )
        .then(() => {
          setCountLike(2);
        })
        .catch((errr) => {
          console.log(errr);
        });
    }

    if (countLike > 1) {
      setCountLike(0);
      const liveRemove = data?.userEmailLike?.filter(
        (data) => data !== userEmail
      );
      console.log(liveRemove);
      const postUserRef = collection(db, "postuser");
      setDoc(
        doc(postUserRef, data.postId),
        { like: data?.like - 1, userEmailLike: liveRemove },
        {
          merge: true,
        }
      )
        .then(() => {
          setCountLike(0);
        })
        .catch((errr) => {
          console.log(errr);
        });
    }
  };

  return (
    <div className="rounded relative mt-6 mb-6 overflow-hidden shadow-md bg-white">
      <div className="px-6 py-4">
        <div className="flex space-x-2 items-center">
          <Image
            src={data?.photoURL}
            width={35}
            height={35}
            className="rounded-full"
          ></Image>
          <div className="font-bold text-md">{data?.displayName}</div>
        </div>
        <h1 className="text-gray-700 text-base text-left ">{data?.post}</h1>
      </div>
      <Image
        width={700}
        height={500}
        src={data?.imagePost}
        alt="Sunset in the mountains"
      />
      <h1 className="ml-4">
        {data?.like > 0 ? (
          <div className="flex items-center">
            <AiFillLike className=" text-blue-700" />
            {data?.like}
          </div>
        ) : (
          ""
        )}
      </h1>
      <hr className="mt-4 mx-4" />
      <div className="pt-2 pb-2 items-center flex justify-around">
        {userlikeremovepost == userEmail ? (
          <button
            onClick={() => postLike(countLike)}
            type="button"
            class="flex items-center px-6 py-2.5 gap-1 text-gray-600 leading-tight rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out"
          >
            <AiFillLike className=" text-blue-700 text-2xl" />
            <h1 className="text-md font-bold mt-1">Like</h1>
          </button>
        ) : (
          <button
            onClick={() => postLike(countLike)}
            type="button"
            class="flex items-center px-6 py-2.5 gap-1 text-gray-600 leading-tight rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out"
          >
            <AiOutlineLike className="text-2xl" />

            <h1 className="text-md font-bold mt-1">Like</h1>
          </button>
        )}
        {/* <button
          onClick={() => postLike(countLike)}
          type="button"
          class="flex items-center px-6 py-2.5 gap-1 text-gray-600 leading-tight rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out"
        >
          {countLike > 0 ? (
            <AiFillLike className=" text-blue-700 text-2xl" />
          ) : (
            <AiOutlineLike className="text-2xl" />
          )}
          <h1 className="text-md font-bold mt-1">Like</h1>
        </button> */}
        <button
          type="button"
          class="flex items-center px-6 py-2.5 gap-1 text-gray-600 leading-tight rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out"
        >
          <GoComment className="text-2xl" />
          <h1 className="text-md font-bold">Comment</h1>
        </button>
        <button
          type="button"
          class="flex items-center px-6 py-2.5 gap-1 text-gray-600 leading-tight rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out"
        >
          <RiMessengerLine className="text-2xl" />
          <h1 className="text-md font-bold">Share</h1>
        </button>
      </div>
      <hr className=" mx-4" />
      <div className="md:px-6 pt-2 pb-2">
        <div className="flex ml-2 items-center justify-end rounded-full bg-gray-200 p-2">
          <input
            className="flex items-center mx-2 bg-transparent outline-none pr-8 w-full  placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Write a comment"
          />
          <span className="p-0 hover:bg-gray-300 cursor-pointer rounded-full">
            <BsCamera className="mx-2 h-6 text-gray-600" />
          </span>
          <span className="p-0 hover:bg-gray-300 cursor-pointer rounded-full">
            <BsEmojiSmile className="h-6 mx-2 cursor-pointer text-gray-600" />
          </span>
          <span className="p-0 hover:bg-gray-300 cursor-pointer rounded-full">
            <HiOutlineGift className="h-6 mx-2 cursor-pointer text-gray-600" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
