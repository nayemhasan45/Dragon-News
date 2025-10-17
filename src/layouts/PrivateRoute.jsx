import React, { use } from 'react';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';


const PrivateRoute = ({children}) => {
    const {crUser,loading}=use(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(crUser &&crUser?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;