import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./FirebaseAuthContext";
import { auth } from "./firebase.config";
import { useEffect, useState } from "react";



const FirebaseAuthProvider = ({children}) => {
    const [crUser,setCrUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // creating user with email and password 
    // creating a user 
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // log in user 
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // log out user 
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }

    // signin user with google 
    const provider = new GoogleAuthProvider();
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider);
    }

    // signin user with github 
    const gitProvider = new GithubAuthProvider();
    const githubSignIn=()=>{
        return signInWithPopup(auth,gitProvider);
    }

    // setObserver to save the user data
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setCrUser(currentUser);
            setLoading(false);
        }) 
        return ()=>{
            unSubscribe();
        }
    },[])
    const userData={
        createUser,
        signInUser,
        signOutUser,
        googleSignIn,
        githubSignIn,
        crUser,
        loading,
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

export default FirebaseAuthProvider;