import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app)
  const [user,setUser] = useState(null);
  const [loader,setLoader] = useState(true);
//create user 
const createUser = (email,password) => {
  setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

//sign in user

const signInUser = (email,password) => {
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password)
}


//get user

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser => {
    setUser(currentUser)
    setLoader(false)
  }) 
  return () => {
    unSubscribe();
  }
},[])

//sign out
const logOut = () => {
  return signOut(auth);
}

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
