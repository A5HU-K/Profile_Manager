import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "../utils/api";
import DashboardLayout from "./componenets/layout/DashboardLayout";

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
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

  if (!user) return null;

  return (
    <DashboardLayout>
      <h1 className="title">Profile</h1>
      <div className="box">
        <h2 className="subtitle">Personal Information</h2>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Update Profile</button>
          </div>
        </div>
      </div>

      <div className="box mt-5">
        <h2 className="subtitle">Password Reset</h2>
        <div className="field">
          <label className="label">Current Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Current Password"
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
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Reset Password</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
