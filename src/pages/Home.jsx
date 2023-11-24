import React from "react";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  // Fungsi untuk mendapatkan path dari URL
  const getPathname = () => {
    return window.location.pathname;
  };

  // Jika pathnya adalah localhost, redirect ke landing page
  if (getPathname() === '/') {
    return <Navigate to="/landingpage" />;
  }

  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
    </div>
  );
};

export default Home;
