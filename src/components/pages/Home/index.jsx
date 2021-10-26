import React from "react";
import Feed from "../../Feed";
import Navbar from "../../Navbar";
import Rightbar from "../../Rightbar";
import Sidebar from "../../Sidebar";

import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
