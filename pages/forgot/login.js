import { useState } from "react";
import { auth } from "../../lib/authentication/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);

      setSuccess(
        `Password reset email has been sent to ${email}. Please check your email.`
      );
      setError(null);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setError("Error sending password reset email.");
      setSuccess(null);
    }
  };

  return (
    <div className="mt-5" style={{ color: "white" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-3 mb-2" align="left">
            Email Address:
          </div>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            className="input input-bordered bg-darkone w-full"
          />
        </div>

        {error && (
          <div className="alert alert-error shadow-lg mt-4">
            <div>
              <span>{error}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="alert alert-success shadow-lg mt-4">
            <div>
              <span>{success}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-wide btn-info w-full mt-3 btn-accent w-full"
        >
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
}