import { GoComment } from "react-icons/go";
import { BsCamera, BsEmojiSmile, BsSearch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
const Post = () => {
  return (
    <div className="rounded mt-6 mb-6 overflow-hidden shadow-md bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base text-left ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <img
        className="w-full"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <hr className="mt-4 mx-4" />
      <div className="pt-2 pb-2 items-center flex justify-around">
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <AiOutlineLike />
          <p className="text-md font-semibold">Like</p>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <GoComment />
          <p className="text-md mb-1  font-semibold">Comment</p>
        </div>
        <div className="flex items-center  gap-1 px-3 py-8 md:px-10 md:py-2 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-md ">
          <RiMessengerLine />
          <p className="text-md font-semibold">Share</p>
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
