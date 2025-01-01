import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  const [Visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!Visible);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/login" className="sidebar-link">
            <i className="fa-solid fa-user-plus"></i> Login
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/user" className="sidebar-link">
            <i className="fa-solid fa-user"></i> Users
          </Link>
        </li>
        <li className="sidebar-item sidebar-link"
           id="a1" onClick={toggle}
          >
            <i className="fa-solid fa-book"></i> Products <i class="fa-solid fa-caret-down" id="drop"></i>
          {Visible && (
            <div className="nested-menu">
              <p>
                <Link to="/product/form" className="sidebar-link"><i class="fa-solid fa-calendar-week"></i> Form</Link>
              </p>
              <p>
                <Link to="/product/list" className="sidebar-link"><i class="fa-solid fa-table-list"></i> List</Link>
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
