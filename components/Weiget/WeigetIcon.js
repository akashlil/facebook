const WeigetIcon = () => {
  return (
    <div className="flex space-x-2 items-center md:mx-3 rounded-md hover:bg-gray-300  cursor-pointer p-2 ">
      <img
        src="https://i.ibb.co/jLcH6qs/akash.jpg"
        width={35}
        height={35}
        layout="fixed"
        className="rounded-full border-4 border-green-700"
      ></img>
      <p className=" font-semibold ">{"Akash"}</p>
    </div>
  );
};

export default WeigetIcon;
