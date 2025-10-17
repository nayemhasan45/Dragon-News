import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import LoginUserSuccess from '../components/LoginUserSuccess';

const Login = () => {
    const {signInUser}=use(AuthContext);
    const location=useLocation();
    const navigate = useNavigate();

    const [error,setError]=useState("");
    const handleSubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        signInUser(email,password)
        .then(()=>{
            LoginUserSuccess();
            navigate(`${location.state?location.state:'/'}`)
        })
        .catch(()=>{
            setError("Invalid Credential")
        })
        e.target.reset();
    }
    return (
        <div className='flex items-center justify-center '>
            <div className="card bg-base-100  p-5 shrink-0 shadow-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Login your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        {
                            error && <p className='text-red-500 text-sm pt-3'>{error}</p>
                        }
                        <p className='pt-5'>Dont’t Have An Account ? <Link className='text-secondary font-semibold' to={'/auth/register'}>Register</Link></p>
                    </form  >
                </div>
            </div>
        </div>
    );
};

export default Login;