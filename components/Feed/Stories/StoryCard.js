import Image from "next/image";

const StoryCard = ({ story }) => {
  const { name, src, profile } = story;

  return (
    <div className="relative m-1 min-w-[90px] min-h-[150px] md:h-20 md:w-20 lg:h-48 lg:w-28 cursor-pointer transition duration-300 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-2 border-4 border-indigo-500"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      ></Image>

      <Image
        className="object-cover brightness-50 px-5 rounded lg:rounded-xl"
        src={src}
        layout="fill"
      ></Image>
    </div>
  );
};

export default StoryCard;
