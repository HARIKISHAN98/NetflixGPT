import Header from "../common/Header";
import { useRef } from "react";
import { checkValidData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  toggleSignIn,
  setValidData,
} from "../../utils/slices/userSlice";
import { BG_IMG, USER_ICON } from "../../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const { IsSignIn, ValidData } = useSelector((store) => store.user);

  const handleTestLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        process.env.REACT_APP_DEMO_EMAIL,
        process.env.REACT_APP_DEMO_PASS
      );
    } catch (error) {
      console.error("Test login failed", error);
    }
  };

  const handleSignInToggle = () => {
    dispatch(toggleSignIn());
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonCLick = () => {
    // check valid data or not
    const ResultValidData = checkValidData(
      IsSignIn,
      IsSignIn ? "" : name.current?.value,
      email.current.value,
      password.current.value
    );
    dispatch(setValidData(ResultValidData));

    if (ResultValidData) return;

    if (IsSignIn === true) {
      //Sign In User
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(setValidData(errorMessage + " " + errorCode));
        });
    } else {
      //Sign Up User
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              dispatch(setValidData(error.message));
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(setValidData(errorMessage + " " + errorCode));
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="fixed inset-0 -z-20">
        <img src={BG_IMG} alt="bg-img" className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

      <div className="flex min-h-screen items-start sm:items-center justify-center px-4 pt-24 sm:pt-0">
        <form
          className="w-full
            max-w-sm
            sm:max-w-md
            bg-black/75
            backdrop-blur-sm
            p-6
            sm:p-10
            rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-xl sm:text-3xl font-semibold text-white mb-6">
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 sm:p-4 mb-4 w-full bg-gray-700/80 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="p-3 sm:p-4 mb-4 w-full bg-gray-700/80 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 sm:p-4 mb-4 w-full bg-gray-700/80 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <p className="text-red-600 text-sm mb-3">{ValidData}</p>
          <button
            type="submit"
            className="mt-2 p-3 bg-red-600 hover:bg-red-700 transition w-full rounded font-semibold text-lg text-white"
            onClick={handlebuttonCLick}
          >
            {IsSignIn ? "Sign In" : "Sign Up"}
          </button>
          {IsSignIn && (
            <>
              <div className="my-3 text-center text-gray-400 text-sm">OR</div>
              <button
                type="button"
                className="mt-3 w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-medium text-white"
                onClick={handleTestLogin}
              >
                Sign in with Test Credentials
              </button>{" "}
            </>
          )}
          <p className="mt-6 text-gray-300 text-sm">
            {IsSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSignInToggle}
            >
              {IsSignIn ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
