import { FaUserFriends } from "react-icons/fa";
import { RiGroup2Fill } from "react-icons/ri";
import { BsDisplayFill } from "react-icons/bs";
import { AiFillFlag } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import SideBarIcon from "./SideBarIcon";
import Image from "next/image";
import AuthUser from "../../hook/AuthUser";
const SideBar = () => {
  const { usr } = AuthUser();
  return (
    <div className="hidden sm:inline-flex font-semibold">
      <div className="mt-5 p-3 sm:p-0 max-w-[600px] xl:min-w-[300px] scrollbar-thumb-rounded hover:h-screen  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex space-x-2 items-center md:mx-3 rounded-md hover:bg-gray-300  cursor-pointer p-2 ">
          <Image
            src={usr?.photoURL}
            width={35}
            height={35}
            className="rounded-full"
          ></Image>
          <h1 className=" font-semibold ">{usr?.displayName}</h1>
        </div>
        <SideBarIcon Icon={FaUserFriends} Title={"Frieds"}></SideBarIcon>
        <SideBarIcon Icon={RiGroup2Fill} Title={"Groups"}></SideBarIcon>
        <SideBarIcon Icon={BsDisplayFill} Title={"Watch"}></SideBarIcon>
        <SideBarIcon Icon={AiFillFlag} Title={"Page"}></SideBarIcon>
        <SideBarIcon
          Icon={SiHomeassistantcommunitystore}
          Title={"Marketplace"}
        ></SideBarIcon>
      </div>
    </div>
  );
};

export default SideBar;
