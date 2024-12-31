import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/login" className="sidebar-link">
          <i class="fa-solid fa-user-plus"></i> Login
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/user" className="sidebar-link">
          <i class="fa-solid fa-user"></i> Users
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/product" className="sidebar-link">
          <i class="fa-solid fa-book"></i> Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
