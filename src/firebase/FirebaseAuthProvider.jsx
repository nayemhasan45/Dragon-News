import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./FirebaseAuthContext";
import { auth } from "./firebase.config";



const FirebaseAuthProvider = ({children}) => {
    // const data = {name:'nayem'}
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userData={
        createUser,
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

export default FirebaseAuthProvider;