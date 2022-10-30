import StoryCard from "./StoryCard";
const storiesData = [
  {
    id: 1,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 3,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 4,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 5,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/f0p",
  },
];
const Stories = () => {
  return (
    <div className="flex space-x-4  no-scrollbar overflow-x-auto">
      {storiesData?.map((story) => (
        <StoryCard story={story} key={story.id} />
      ))}
    </div>
  );
};

export default Stories;
