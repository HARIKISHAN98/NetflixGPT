import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true);

  const handleSignInToggle = () => {
    setIsSignIn(!IsSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-4/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 bg-opacity-80">
        <h1 className="text-3xl text-white font-bold my-4">
          {IsSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-4 my-3 w-full bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 text-white"
        />
        <button type="submit" className="p-4 my-3 bg-red-600 w-full rounded-lg">
          {IsSignIn ? "Sign In" : "Sign Up"}
        </button>
        {IsSignIn ? (
          <p className="my-6 text-white text-lg">
            New to Netflix?{" "}
            <span
              className="cursor-pointer hover:underline"
              onClick={handleSignInToggle}
            >
              Sign up Now
            </span>
          </p>
        ) : (
          <p className="my-6 text-white text-lg">
            Already Sign Up?{" "}
            <span
              className="cursor-pointer hover:underline"
              onClick={handleSignInToggle}
            >
              Login In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
