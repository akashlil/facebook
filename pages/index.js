import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Weiget from "../components/Weiget/Weiget";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link
          rel="shortcut icon"
          href="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
        />
      </Head>
      <Header />
      <main className="flex">
        <SideBar></SideBar>
        <Feed />
        <Weiget></Weiget>
      </main>
    </div>
  );
}
