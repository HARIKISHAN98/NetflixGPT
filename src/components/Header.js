import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptSearchPage = useSelector((store) => store.gpt.showgptSearchPage);
  const dispatch = useDispatch();

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/Error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchPage());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unSubscribe;
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 w-full z-10 flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-40 md:w-56" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex gap-2">
          { showgptSearchPage &&
            <select
              className="bg-black text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option
                  className="px-2"
                  key={lan.identifier}
                  value={lan.identifier}
                >
                  {lan.name}
                </option>
              ))}
            </select>
          }

          <button
            className="bg-purple-600 py-2 px-4 rounded-lg text-white hover:bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {showgptSearchPage ? "HomePage" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="rounded-full w-10 h-10"
          />
          {
            <button
              className="bg-red-600 text-white px-4 py-1.5 font-semibold rounded-md hover:bg-red-700 transition"
              onClick={handleSingOut}
            >
              Sign Out
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
