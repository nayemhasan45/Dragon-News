import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import RegisterUserSuccess from '../components/RegisterUserSuccess';

const Register = () => {
    const { createUser,signOutUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    // click handler for submit btn
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError("name should be more than 5 char");
        } else {
            setNameError("");
        }
        const email = e.target.email.value;
        const emailRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegularExpression.test(email)) {
            return setEmailError("please provide valid email");
        } else {
            setEmailError("");
        }
        const password = e.target.password.value;
        if (password.length < 6) {
            return setPassError("at least 6 char")
        }else{
            setPassError("");
        }
        // call firebase from auth context
        createUser(email, password)
            .then(()=>{
                signOutUser();
                RegisterUserSuccess();
            })
            .catch(err => console.log(err))
        e.target.reset();
    }
    return (
        <div className='flex items-center justify-center '>
            <div className="card bg-base-100   p-5 shrink-0 shadow-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-3xl text-center font-semibold'>Register your account</h3>
                    <hr className='border-accent' />
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        {
                            nameError && <p className='text-red-500 text-sm'>{nameError}</p>
                        }
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {
                            emailError && <p className='text-red-500 text-sm'>{emailError}</p>
                        }
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {
                            passError && <p className='text-red-500 text-sm'>{passError}</p>
                        }
                        <label className="label pt-3">
                            <input type="checkbox" className="checkbox" required />
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