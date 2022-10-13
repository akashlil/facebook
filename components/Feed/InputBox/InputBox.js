import Image from "next/image";
import { useRef } from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineMood } from "react-icons/md";

const InputBox = () => {
  const postInput = useRef();
  const ok = (e) => {
    e.preventDefault();
    console.log(postInput.current.value);
    postInput.current.value = "";
  };
  return (
    <div className="shadow-md rounded p-4 mt-5 bg-white ">
      <form onSubmit={ok} className="flex gap-2">
        <Image
          src="https://i.ibb.co/jLcH6qs/akash.jpg"
          width={40}
          height={38}
          layout="fixed"
          className="m-2 rounded-full"
        ></Image>{" "}
        <input
          type="text"
          ref={postInput}
          className="bg-gray-100  hover:bg-gray-200 cursor-pointer w-full placeholder-gray-700 rounded-full px-3 outline-none"
          placeholder="What's on you mind, Md?"
        />
      </form>
      <hr className="my-3" />
      <div className="flex justify-around">
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <FaVideo className="text-red-500 text-2xl" />
          <p className="text-md font-semibold">Like</p>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <IoMdPhotos className="text-green-500 text-2xl" />
          <p className="text-md mb-1  font-semibold">Comment</p>
        </div>
        <div className="flex items-center  gap-1 px-3 py-8 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <MdOutlineMood className="text-yellow-500 text-2xl" />
          <p className="text-md font-semibold">Share</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
