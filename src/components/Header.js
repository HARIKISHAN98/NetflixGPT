import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => { 
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
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

    useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({ uid: uid, email : email, displayName : displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unSubscribe;
  }, []);

  return (
    <div className="absolute top-0 w-full z-10 flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black/45">
      <img
        className="w-40 md:w-56"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      { user && <div className="flex gap-2">
        <img src={user?.photoURL} alt="user-icon" className="rounded-full w-10 h-10"/>
      {<button
        className="bg-red-600 text-white px-4 py-1.5 font-semibold rounded-md hover:bg-red-700 transition"
        onClick={handleSingOut}
      >
        Sign Out
      </button>}
      </div>}
    </div>
  );
};

export default Header;
