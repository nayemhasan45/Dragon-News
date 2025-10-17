import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import LoginUserSuccess from '../components/LoginUserSuccess';
import LoginUserUnsuccess from '../components/LoginUserUnsuccess';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(() => {
                LoginUserSuccess();
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(() => {
                setError("Invalid Credential");
                LoginUserUnsuccess();
            });
        e.target.reset();
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8'>
            <div className="card bg-base-100 w-full max-w-md p-5 sm:p-8 shadow-2xl rounded-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-2xl sm:text-3xl text-center font-semibold'>Login your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} className="fieldset space-y-3">
                        <label className="label text-sm sm:text-base">Email</label>
                        <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" required />
                        
                        <label className="label text-sm sm:text-base">Password</label>
                        <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" required />

                        <div className="flex justify-end text-xs sm:text-sm">
                            <Link to={'/auth/forgetPassword'} className="link link-hover text-secondary">Forgot password?</Link>
                        </div>

                        <button className="btn btn-neutral w-full mt-2 sm:mt-4">Login</button>

                        {error && <p className='text-red-500 text-sm text-center pt-3'>{error}</p>}

                        <p className='pt-3 text-center text-sm sm:text-base'>
                            Don’t Have An Account?{' '}
                            <Link className='text-secondary font-semibold' to={'/auth/register'}>
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
