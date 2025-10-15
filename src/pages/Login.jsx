import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div className='flex items-center justify-center '>
            <div class="card bg-base-100  p-5 shrink-0 shadow-2xl">
                <div class="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Login your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} class="fieldset">
                        <label class="label">Email</label>
                        <input type="email" name='email' class="input" placeholder="Email" />
                        <label class="label">Password</label>
                        <input type="password" name='password' class="input" placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        <button class="btn btn-neutral mt-4">Login</button>
                        <p className='pt-5'>Dont’t Have An Account ? <Link className='text-secondary font-semibold' to={'/auth/register'}>Register</Link></p>
                    </form  >
                </div>
            </div>
        </div>
    );
};

export default Login;