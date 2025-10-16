import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';

const Login = () => {
    const {signInUser}=use(AuthContext);
    const navigate = useNavigate();
    const handleSubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        signInUser(email,password)
        .then(()=>{
            navigate('/category/0')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='flex items-center justify-center '>
            <div className="card bg-base-100  p-5 shrink-0 shadow-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Login your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='pt-5'>Dont’t Have An Account ? <Link className='text-secondary font-semibold' to={'/auth/register'}>Register</Link></p>
                    </form  >
                </div>
            </div>
        </div>
    );
};

export default Login;