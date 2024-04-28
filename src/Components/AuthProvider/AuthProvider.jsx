import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userSignIn = ()=>{
        setLoading(true);
        return  signInWithPopup(auth,googleProvider);
    }
    const userGithubSignIn = ()=>{
        setLoading(true);
        return  signInWithPopup(auth,gitHubProvider);
    }

    const userSignIn2 =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
        setUser(null);
        return signOut(auth);
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, []);
    const allData = {
        createUser,
        userSignIn,
        user,
        userSignIn2,
        logOut,
        userGithubSignIn,
        loading,
    }

  return (
    <AuthContext.Provider value={allData}>
        {children}
    </AuthContext.Provider>
  )
}
