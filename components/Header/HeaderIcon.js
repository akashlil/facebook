const HeaderIcon = ({ Icon, action }) => {
  return (
    <div>
      <div className="flex items-center cursor-pointer md:px-8 sm:h-14 md:hover:bg-gray-100 rounded-xl  text-5xl ">
        <Icon
          className={`h-5 sm:h-7 text-gray-500 mx-auto ${
            action && "text-blue-500"
          }`}
        ></Icon>
      </div>
      {action && <span className="md:beforeItemHeader"></span>}
    </div>
  );
};

export default HeaderIcon;
