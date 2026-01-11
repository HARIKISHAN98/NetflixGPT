import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/slices/userSlice";
import { toggleGptSearchPage } from "../../utils/slices/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../../utils/constant";
import { setLanguage } from "../../utils/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const {user} = useSelector((store) => store.user);
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
            displayName: displayName || "Demo User",
            photoURL: photoURL || USER_ICON,
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
    <div className="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-4 md:px-10 bg-black">
      <img className="w-28 md:w-44" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex items-center gap-2 justify-end">
          { showgptSearchPage &&
            <select
              className="hidden w-433:block bg-black text-white rounded-lg p-2 text-xs md:text-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option
                  key={lan.identifier}
                  value={lan.identifier}
                >
                  {lan.name}
                </option>
              ))}
            </select>
          }

          <button
            className="bg-purple-600 w-295:px-2 w-295:py-1 px-3 py-1.5 rounded-md text-sm sm:text-sm text-white hover:bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {showgptSearchPage ? "HomePage" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="rounded-full w-8 h-8 md:w-9 md:h-9"
          />
          {
            <button
              className="bg-red-600 text-white w-295:px-2 w-295:py-1 px-3 py-1.5 rounded-md text-xs sm:text-sm hover:bg-red-700 transition"
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
