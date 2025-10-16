import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./FirebaseAuthContext";
import { auth } from "./firebase.config";
import { useEffect, useState } from "react";



const FirebaseAuthProvider = ({children}) => {
    const [crUser,setCrUser]=useState(null);
    // creating a user 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // log in user 
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // log out user 
    const signOutUser=()=>{
        return signOut(auth);
    }
    // setObserver to save the user data
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setCrUser(currentUser);
        }) 
        return ()=>{
            unSubscribe();
        }
    },[])
    const userData={
        createUser,
        signInUser,
        signOutUser,
        crUser,
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

export default FirebaseAuthProvider;