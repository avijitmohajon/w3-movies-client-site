import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
// import app from "../Firebase/Firebase.init";
import  app  from "../Firebase/Firebase.init";

import React from "react";
// import { InfinitySpin } from "react-loader-spinner";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState()

  // console.log(user);



  // theme toggling
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "black");
    }
  }, [isDarkMode]);




  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const UserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    UserLogin,
    updateUserProfile,
    setIsDarkMode,
    isDarkMode,
    loading,

  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
