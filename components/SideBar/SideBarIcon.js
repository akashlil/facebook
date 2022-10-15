import Image from "next/image";

const SideBarIcon = ({ Icon, Title }) => {
  return (
    <div className="flex space-x-2 items-center md:mx-3 rounded-md hover:bg-gray-300  cursor-pointer p-2 ">
      <Icon className={`md:text-3xl  text-[#1d8ff7]`}></Icon>
      <h1>{Title}</h1>
    </div>
  );
};

export default SideBarIcon;
