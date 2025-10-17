import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../firebase/FirebaseAuthContext';
import RegisterUserSuccess from '../components/RegisterUserSuccess';
import RegisterUserUnsuccess from '../components/RegisterUserUnsuccess';

const Register = () => {
    const { createUser, signOutUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");

    // click handler for submit btn
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
        } else {
            setNameError("");
        }
        const email = e.target.email.value;
        const emailRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegularExpression.test(email)) {
            return setEmailError("Please provide a valid email");
        } else {
            setEmailError("");
        }
        const password = e.target.password.value;
        if (password.length < 6) {
            return setPassError("At least 6 characters required");
        } else {
            setPassError("");
        }

        // call firebase from auth context
        createUser(email, password)
            .then(() => {
                signOutUser();
                RegisterUserSuccess();
            })
            .catch(() => {
                RegisterUserUnsuccess();
            });

        e.target.reset();
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8'>
            <div className="card bg-base-100 w-full max-w-md p-5 sm:p-8 shadow-2xl rounded-2xl">
                <div className="card-body space-y-5">
                    <h3 className='text-2xl sm:text-3xl text-center font-semibold'>
                        Register your account
                    </h3>
                    <hr className='border-accent' />

                    <form onSubmit={handleSubmit} className="fieldset space-y-3">
                        <label className="label text-sm sm:text-base">Your Name</label>
                        <input type="text" name='name' className="input input-bordered w-full" placeholder="Name" required />
                        {nameError && <p className='text-red-500 text-sm'>{nameError}</p>}

                        <label className="label text-sm sm:text-base">Email</label>
                        <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" required />
                        {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}

                        <label className="label text-sm sm:text-base">Password</label>
                        <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" required />
                        {passError && <p className='text-red-500 text-sm'>{passError}</p>}

                        <label className="label pt-3 text-xs sm:text-sm flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" required />
                            Accept Terms & Conditions
                        </label>

                        <button className="btn btn-neutral w-full mt-2 sm:mt-4">Register</button>

                        <p className='pt-3 text-center text-sm sm:text-base'>
                            Already have an account?{' '}
                            <Link className='text-secondary font-semibold' to={'/auth/login'}>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
