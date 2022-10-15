import { GoComment } from "react-icons/go";
import { BsCamera, BsEmojiSmile, BsSearch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import Image from "next/image";
const Post = ({ data }) => {
  return (
    <div className="rounded relative mt-6 mb-6 overflow-hidden shadow-md bg-white">
      <div className="px-6 py-4">
        <div className="flex space-x-2 items-center">
          {" "}
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
      <hr className="mt-4 mx-4" />
      <div className="pt-2 pb-2 items-center flex justify-around">
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <AiOutlineLike />
          <h1 className="text-md font-semibold">Like</h1>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <GoComment />
          <h1 className="text-md mb-1  font-semibold">Comment</h1>
        </div>
        <div className="flex items-center  gap-1 px-3 py-8 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <RiMessengerLine />
          <h1 className="text-md font-semibold">Share</h1>
        </div>
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
