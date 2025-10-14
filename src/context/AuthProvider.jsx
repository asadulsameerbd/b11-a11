import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase_init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  //  Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser); 
    });

    return () => unsubscribe();
  }, []);

  // userData 

  const userData = { user, createUser, signinUser, logout }

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
