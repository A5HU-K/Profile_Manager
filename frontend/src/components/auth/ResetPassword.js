import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      const response = await api.patch(
        `/api/users/auth/resetPassword/${token}`,
        { password, passwordConfirm }
      );
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full" style={{ width: "20%", maxWidth: "80%" }}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">New Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="input"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password-confirm" className="sr-only">Confirm New Password</label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                autoComplete="new-password"
                required
                className="input"
                placeholder="Confirm New Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="button is-primary is-fullwidth"
            >
              Reset Password
            </button>
          </div>
        </form>
        {error && (
          <p className="mt-2 text-center text-sm text-red-600">{error}</p>
        )}
        {message && (
          <p className="mt-2 text-center text-sm text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
