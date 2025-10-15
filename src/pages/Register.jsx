import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    // click handler for submit btn 
    const handleSubmit=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div className='flex items-center justify-center '>
            <div class="card bg-base-100   p-5 shrink-0 shadow-2xl">
                <div class="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Register your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} class="fieldset">
                        <label class="label">Your Name</label>
                        <input type="text" name='name' class="input" placeholder="Name" />
                        <label class="label">Email</label>
                        <input type="email" name='email' class="input" placeholder="Email" />
                        <label class="label">Password</label>
                        <input type="password" name='password' class="input" placeholder="Password" />
                        <label className="label pt-3">
                            <input type="checkbox"  className="checkbox" />
                            Accept Term & Conditions
                        </label>
                        <button class="btn btn-neutral mt-4">Register</button>
                        <p className='pt-5'>Al-Ready Have An Account ? <Link className='text-secondary font-semibold' to={'/auth/login'}>login</Link></p>
                    </form  >
                </div>
            </div>
        </div>
    );
};

export default Register;