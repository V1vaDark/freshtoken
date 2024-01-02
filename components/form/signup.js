import { useState } from "react";

import {
    isEmail,
    allLetter,
    CheckPassword,
  } from "../../lib/validations/input-validations";

export default function Signup(props) {

    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [confirmPasswordInput, setConfirmPasswordInput] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleNameError = () => {
        if (!nameInput || !allLetter(nameInput)) {
        setNameError(true);
        return;
        }

        setNameError(false);
    };

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
        if (!confirmPasswordInput) {
        setPasswordError(true);
        return;
        } else if (confirmPasswordInput !== passwordInput) {
        setPasswordError(true);
        return;
        } else if (!CheckPassword(confirmPasswordInput)) {
        setPasswordError(true);
        return;
        }

        setPasswordError(false);
    };
    
    const handleFetch = () => {
        fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            email: emailInput,
            displayName: nameInput,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
                setIsLoading(false);
                if (data.message === "success") {
                    setSuccess(true);
                }else{
                    setFormValid(data.message);
                }

        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormValid(false);
        setSuccess(false);

        if (!nameInput || nameError) {
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
          }

          setIsLoading(true);

          setFormValid(false);
          handleFetch();
    };

    return (
        <div className="mt-5" style={{ color: "white" }}>
            <div>
                <div className="mt-3 mb-2" align="left">
                    Full Name :
                </div>
                <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(event) => setNameInput(event.target.value)}
                    onBlur={handleNameError}
                    className={`input input-bordered ${
                        nameError ? "input-error" : "input-accent"
                      } bg-darkone w-full`}
                />
            </div>
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
                />
            </div>
            <div>
                <div className="mt-3 mb-2" align="left">
                    Confirm Password :
                </div>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(event) => setConfirmPasswordInput(event.target.value)}
                    className={`input input-bordered ${
                        passwordError ? "input-error" : "input-accent"
                      } bg-darkone w-full`}
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
                <span>Your account was created successfully.</span>
                </div>
            </div>
            )}

            <button
                className={`btn btn-wide w-full mt-3 btn-accent w-full`}
                onClick={handleSubmit}
                disabled={isLoading}
                >
                {isLoading && <span className="loading loading-spinner"></span>}
                REGISTER YOUR ACCOUNT
            </button>

            <div className="mt-3">
                Already Signed Up ?
                <div
                    className="badge badge-info mx-2 cursor-pointer"
                    onClick={() => props.setChecked(false)}
                >
                    Login
                </div>
            </div>
        </div>
    );
}