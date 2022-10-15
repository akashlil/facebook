import { signInWithPopup, auth, provider } from "../firebase";
const Login = () => {
  const googleLogin = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error);
    });
  };
  return (
    <div className="sm:flex sm:p-40 h-screen items-center justify-center gap-20 bg-gray-100">
      <div className="sm:mb-24">
        <h1 className="text-center sm:my-5 py-5 sm:py-0 sm:text-left text-blue-500 font-bold text-2xl sm:text-6xl">
          facebook
        </h1>
        <h2 className="text-3xl sm:flex hidden ">
          Facebook helps you connect and share <br /> with the people in your
          life.
        </h2>
      </div>
      <div className="lg:w-1/3">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <form className="">
            <div className="mb-4">
              <input
                className="shadow appearance-none focus:border-blue-500  border rounded w-full text-gray-700 p-4 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email address or phone number"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border focus:border-blue-500 rounded w-full p-4 text-gray-700 mb-3 leading-tight  focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Please choose a password"
              />
            </div>
            <div className="w-full text-center">
              <button
                className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In
              </button>
              <br />
              <a
                className="inline-block align-baseline mt-2 font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="justify-center hidden sm:flex mt-3">
            <button
              className="bg-green-500 w-52  mb-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={googleLogin}
            >
              Login With Google
            </button>
          </div>
        </div>
        <div className="justify-center flex sm:hidden">
          <button
            className="bg-green-500 w-52  mb-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={googleLogin}
          >
            Login With Google
          </button>
        </div>

        <h1 className="text-center text-gray-500 text-xs">
          Create a Page for a celebrity, brand or business.
        </h1>
      </div>
    </div>
  );
};

export default Login;
