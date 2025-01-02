import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div id="nav" style={{ padding: "10px" }}>
      <h3>Welcome!</h3>
     <div style={{width:"70%"}}>
      <input type="text" placeholder="Search...." id="search" />
      </div>
      <div id="icon">
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-bell"></i>
      <i class="fa-solid fa-circle-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
