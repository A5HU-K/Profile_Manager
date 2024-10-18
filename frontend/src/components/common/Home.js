import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

function Home() {
  return (
    <section className="hero is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            Welcome to User Management
          </h1>
          <h2 className="subtitle has-text-centered">
            Manage your users with ease
          </h2>
          <div className="buttons is-centered mt-6">
            <Link to="/register" className="button is-primary is-large">
              Register
            </Link>
            <Link to="/login" className="button is-info is-large">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
