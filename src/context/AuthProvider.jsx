import axios from "axios";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase_init";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google

  const signGoogle=()=>{
    return signInWithPopup(auth,provider)
  }

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);

      if(currentUser?.email){
        const email = {email : currentUser.email}
        axios.post("https://b11-a11-server-azure.vercel.app/jwt",email,  {withCredentials : true} )
        .then(res=>{
          console.log("auth ok :",res.data);
        })
        .catch(error=>{
          console.log(error);
        })
      }
    });

    return () => unsubscribe();
  }, []);

  // userData

  const userData = {
    user,
    loading,
    setLoading,
    createUser,
    signinUser,
    logout,
    signGoogle
  };

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
