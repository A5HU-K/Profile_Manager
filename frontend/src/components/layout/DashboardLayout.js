import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="has-background-light" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="columns is-gapless" style={{ flex: 1 }}>
        <Sidebar />
        <main className="column">
          <section className="section">
            <div className="container">{children}</div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
