import Image from "next/image";
import { BsSearch, BsPlusLg, BsMessenger } from "react-icons/bs";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlinePlus,
} from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { RiGroup2Line } from "react-icons/ri";
import HeaderIcon from "./HeaderIcon";
import AuthUser from "../../hook/AuthUser";

const Header = () => {
  const { loadUser, usr } = AuthUser();

  return (
    <div className="flex top-0 bg-white sticky p-2 md:p-0 z-50 lg:px-5 shadow-md ">
      {/* start */}
      <div className="hidden sm:flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={35}
          height={35}
          layout="fixed"
        ></Image>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <BsSearch className="h-6 text-gray-600" />
          <input
            className="md:inline-flex items-center ml-2 bg-transparent outline-none  hidden placeholder-gray-500 flex-shrink "
            type="text"
            placeholder="Search facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center grow">
        <div className="flex space-x-4 md:space-x-2 myDIV">
          <HeaderIcon action Icon={AiFillHome}></HeaderIcon>
          <HeaderIcon Icon={HiOutlineUsers}></HeaderIcon>
          <HeaderIcon Icon={FiPlayCircle}></HeaderIcon>
          <HeaderIcon Icon={AiOutlineShoppingCart}></HeaderIcon>
          <HeaderIcon Icon={RiGroup2Line}></HeaderIcon>
        </div>
      </div>

      {/* end */}
      <div className="hidden sm:flex items-center md:ml-24">
        <AiOutlinePlus className="cursor-pointer text-4xl rounded-full p-2 mx-1 bg-gray-200 hover:bg-gray-300" />
        <BsMessenger className="cursor-pointer text-4xl rounded-full p-2 mx-1 bg-gray-200 hover:bg-gray-300" />
        <MdNotificationsActive className="cursor-pointer text-4xl rounded-full p-2 mx-1 bg-gray-200 hover:bg-gray-300" />

        <Image
          className=" rounded-full"
          src={usr?.photoURL}
          width={35}
          height={35}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Header;
