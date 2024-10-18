import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../utils/api";
import DashboardLayout from "../layout/DashboardLayout";
import {
  validateProfileData,
  validatePasswordReset,
} from "../../utils//profileUtils";

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState(""); // Added for current password

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const validationError = validateProfileData(name, email);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await api.patch("/api/users/auth/updateMe", {
        name,
        email,
      });
      setUser(response.data.user);
      setMessage("Profile updated successfully");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const passwordError = validatePasswordReset(newPassword, confirmPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const response = await api.patch("/api/users/auth/updateMyPassword", {
        currentPassword,
        newPassword,
        confirmPassword,
      });
      setMessage("Password reset successfully");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  if (!user) return null;

  return (
    <DashboardLayout>
      <h1 className="title">Profile</h1>

      {/* Display message or error */}
      {message && <div className="notification is-info">{message}</div>}
      {error && <div className="notification is-danger">{error}</div>}

      <form onSubmit={handleProfileSubmit}>
        <div className="box">
          <h2 className="subtitle">Personal Information</h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Update Profile</button>
            </div>
          </div>
        </div>
      </form>

      <div className="box mt-5">
        <h2 className="subtitle">Password Reset</h2>
        <form onSubmit={handlePasswordReset}>
          <div className="field">
            <label className="label">Current Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">New Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm New Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Reset Password</button>
            </div>
          </div>
        </form>
        <form onSubmit={handlePasswordReset}>
          <div className="field">
            <label className="label">Current Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">New Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm New Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Reset Password</button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
