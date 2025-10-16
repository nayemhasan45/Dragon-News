
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';
import { use } from 'react';
import { AuthContext } from '../firebase/FirebaseAuthContext';


const Navbar = () => {
    const {crUser,signOutUser}=use(AuthContext);
    
    // handling  logOut button 
    const handleLogOut=()=>{
        signOutUser();
        alert('log out successful');
    }


    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div className='flex items-center gap-5 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                {
                    crUser&& <p>{crUser.email}</p>
                }
                <img src={user} alt="" />
                {
                    crUser?<button onClick={handleLogOut} className='btn btn-primary px-8 py-5 text-white'>Log Out</button>: <Link to={'/auth/login'} className="btn btn-primary px-8 py-5 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;