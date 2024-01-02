import { useState } from "react";
import { signIn } from "next-auth/client";

import {
    isEmail,
    CheckPassword,
  } from "../../lib/validations/input-validations";

export default function Login(props) {

    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleEmailError = () => {
        if (!emailInput) {
        setEmailError(true);
        return;
        } else if (!isEmail(emailInput)) {
        setEmailError(true);
        return;
        }

        setEmailError(false);
    };

    const handlePasswordError = () => {
        if (!passwordInput) {
        setPasswordError(true);
        return;
        } else if (!CheckPassword(passwordInput)) {
        setPasswordError(true);
        return;
        }

        setPasswordError(false);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setFormValid(false);
        setSuccess(false);

/*         if (!nameInput || nameError) {
            setFormValid("Please fill in your Full name in the name field");
            setNameError(true);
            return;
        }

        if (!emailInput || emailError) {
            setFormValid("Invalid Email Address, Please Re-try");
            setEmailError(true);
            return;
          }
      
          if (!confirmPasswordInput || passwordError) {
            setFormValid("Invalid Password, Please Re-try");
            setPasswordError(true);
            return;
          } */

          setIsLoading(true);
          setFormValid(false);

        const result = await signIn("credentials", {
            redirect: false,
            email: emailInput,
            password: passwordInput,
        });

        if (result.error) {
            console.log(result.log);
            setFormValid("Incorrect Password!");
            setIsLoading(false);
            return;
        }

        setSuccess("Login Succesful");
        setIsLoading(false);
        window.location.href = "/";
    };

    return (
        <div className="mt-5" style={{ color: "white" }}>
            <div>
                <div className="mt-3 mb-2" align="left">
                    Email Address :
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmailInput(event.target.value)}
                    onBlur={handleEmailError}
                    className={`input input-bordered ${
                        emailError ? "input-error" : "input-accent"
                      } bg-darkone w-full`}
                />
            </div>
            <div>
                <div className="mt-3 mb-2" align="left">
                    Password :
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered input-accent bg-darkone w-full"
                    onChange={(event) => setPasswordInput(event.target.value)}
                    onBlur={handlePasswordError}
                />
            </div>

            {formValid && (
                <div className="alert alert-warning shadow-lg mt-4">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>{formValid}</span>
                    </div>
                </div>
            )}

            {success && (
            <div className="alert alert-success shadow-lg mt-4">
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Logged in to your account successfully.</span>
                </div>
            </div>
            )}

            <button
                className={`btn btn-wide btn-info w-full mt-3 btn-accent w-full`}
                onClick={handleSubmit}
                disabled={isLoading}
                >
                {isLoading && <span className="loading loading-spinner"></span>}
                LOGIN TO YOUR ACCOUNT
            </button>
            <div className="mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="/forgot" className="underline decoration-solid" style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Forgot Password?</span>
                </a>
            </div>
            <div className="mt-3">
                Don't have an account?
                <div
                    className="badge badge-success mx-2 cursor-pointer"
                    onClick={() => props.setChecked(true)}
                >
                    Register
                </div>
            </div>
        </div>
    );
}