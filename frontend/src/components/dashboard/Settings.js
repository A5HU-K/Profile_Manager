import React from "react";
import DashboardLayout from "./componenets/layout/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <h1 className="title">Settings</h1>
      <div className="box">
        <h2 className="subtitle">Account Settings</h2>
        <div className="field">
          <label className="label">Language</label>
          <div className="control">
            <div className="select">
              <select>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Timezone</label>
          <div className="control">
            <div className="select">
              <select>
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" />
            Receive email notifications
          </label>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
