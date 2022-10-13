import Image from "next/image";

const StoryCard = ({ story }) => {
  const { name, src, profile } = story;

  return (
    <div className="relative my-2 min-w-[100px] min-h-[100px] md:h-20 md:w-20 lg:h-48 lg:w-28 cursor-pointer p-3 transition  \duration-300 transform ease-in hover:scale-105 hover:animate-pulse">
      <img
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 mr-0 top-2 border-4 border-indigo-500"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      ></img>

      <Image
        className="object-cover brightness-50 rounded-full lg:rounded-xl"
        src={src}
        layout="fill"
      ></Image>
    </div>
  );
};

export default StoryCard;
