import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import { Link } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Dashboard() {
  const { user} = useContext(AuthContext);
  const { user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading and error handling
    const fetchData = async () => {
      try {
        // Simulate an API call or data fetching
        // If there's an error, set it here
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data."); // Set error message
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <progress className="progress is-large is-info" max="100">
          Loading...
        </progress>
      ) : user ? (
        <div>
          <h1 className="title">Welcome, {user.name}!</h1>
          <div className="box">
            <h2 className="subtitle">User Information</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user details here */}
          </div>
          <div className="columns">
            <div className="column">
              <div className="box">
                <h2 className="subtitle">Recent Activity</h2>
                <p>No recent activity to display.</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h2 className="subtitle">Quick Actions</h2>
                <div className="buttons">
                  <button className="button is-primary">New Project</button>
                  <button className="button is-info">View Reports</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="notification is-danger">{error}</div>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
