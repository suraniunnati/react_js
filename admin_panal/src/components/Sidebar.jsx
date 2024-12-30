import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#ddd", padding: "10px" }}>
      <h4>Menu</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
