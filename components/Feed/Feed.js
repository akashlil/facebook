import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";
import InputBox from "./InputBox/InputBox";

const Feed = () => {
  return (
    <div className="flex grow items-center flex-col h-screen pb-44 pt-6 no-scrollbar overflow-y-auto">
      <div className="mx-auto md:max-w-xl max-w-xs">
        <Stories></Stories>
        <InputBox></InputBox>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Feed;
