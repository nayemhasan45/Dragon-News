import { use, useRef } from "react";
import { AuthContext } from "../firebase/FirebaseAuthContext";
import ForgetPasswordEmailSent from "../components/ForgetPasswordEmailSent";

const ForgetPassword = () => {
    const { forgetPassword } = use(AuthContext);
    const emailRef = useRef();
    const handleSubmit = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(() => {
                ForgetPasswordEmailSent();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage,errorCode)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8">
            <div className="card bg-base-100 w-full max-w-md p-6 sm:p-8 shadow-2xl rounded-2xl">
                <div className="card-body space-y-5">
                    <h3 className="text-2xl sm:text-3xl text-center font-semibold">Reset Your Password</h3>
                    <hr className="border-accent" />
                    <div className="fieldset space-y-4">
                        <label className="label text-sm sm:text-base">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                        />
                        <button onClick={handleSubmit} type="submit" className="btn btn-neutral w-full mt-2 sm:mt-4">
                            Send Reset Link
                        </button>

                        {/* {message && <p className="text-green-600 text-sm text-center">{message}</p>}
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
