import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';
import logo from '../assets/logo.png'; // Keep the logo
import { useContext } from 'react';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import LogoutUserSuccess from './LogoutUserSuccess';

const Navbar = () => {
    const { crUser, signOutUser } = useContext(AuthContext);

    // handle logOut button
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                LogoutUserSuccess();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 p-3 sm:p-5 bg-base-200'>
            
            {/* Logo */}
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-24 md:w-32' />
            </div>

            {/* Navigation links */}
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-accent'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold' : ''}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'font-bold' : ''}>About</NavLink>
                <NavLink to={'/career'} className={({ isActive }) => isActive ? 'font-bold' : ''}>Career</NavLink>
            </div>

            {/* User Info & Login/Logout */}
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3'>
                {crUser && <p className='text-sm sm:text-base truncate max-w-[150px]'>{crUser.email || crUser.displayName}</p>}

                {/* User image hidden on small screens */}
                <img className='hidden sm:block w-8 h-8 sm:w-10 sm:h-10 rounded-full' src={user} alt="User" />

                {crUser ? (
                    <button
                        onClick={handleLogOut}
                        className='btn btn-primary px-4 sm:px-8 py-2 sm:py-3 text-white text-sm sm:text-base'
                    >
                        Log Out
                    </button>
                ) : (
                    <Link
                        to={'/auth/login'}
                        className='btn btn-primary px-4 sm:px-8 py-2 sm:py-3 text-white text-sm sm:text-base'
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
