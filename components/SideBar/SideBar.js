import { FaUserFriends } from "react-icons/fa";
import { RiGroup2Fill } from "react-icons/ri";
import { BsDisplayFill } from "react-icons/bs";
import { AiFillFlag } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import SideBarIcon from "./SideBarIcon";
const SideBar = () => {
  return (
    <div className="hidden sm:inline-flex font-semibold">
      <div className="mt-5 p-3 sm:p-0 max-w-[600px] xl:min-w-[300px] scrollbar-thumb-rounded hover:h-screen  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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
