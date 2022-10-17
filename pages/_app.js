import AuthUser from "../hook/AuthUser";
import "../styles/globals.css";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const { loadUser, usr, db } = AuthUser();
  if (loadUser) return <h1>ok</h1>;

  if (!usr) {
    return <Login></Login>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
