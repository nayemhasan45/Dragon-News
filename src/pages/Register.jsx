import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';

const Register = () => {
    const {createUser} = use(AuthContext);
    // click handler for submit btn 
    const handleSubmit=e=>{
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        // call firebase from auth context 
        createUser(email,password)
        .then(res=>console.log('user created successfully ',res))
        .catch(err=>console.log(err))
    }
    return (
        <div className='flex items-center justify-center '>
            <div className="card bg-base-100   p-5 shrink-0 shadow-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Register your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <label className="label pt-3">
                            <input type="checkbox"  className="checkbox" />
                            Accept Term & Conditions
                        </label>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='pt-5'>Al-Ready Have An Account ? <Link className='text-secondary font-semibold' to={'/auth/login'}>login</Link></p>
                    </form  >
                </div>
            </div>
        </div>
    );
};

export default Register;