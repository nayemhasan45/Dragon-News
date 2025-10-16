import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./FirebaseAuthContext";
import { auth } from "./firebase.config";
import { useEffect, useState } from "react";



const FirebaseAuthProvider = ({children}) => {
    const [crUser,setCrUser]=useState(null);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
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
        crUser,
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

export default FirebaseAuthProvider;