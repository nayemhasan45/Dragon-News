import React, { use } from 'react';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import { Navigate } from 'react-router';


const PrivateRoute = ({children}) => {
    const {crUser,loading}=use(AuthContext);
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if(crUser &&crUser?.email){
        return children;
    }
    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;