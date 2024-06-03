// components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import "./Sidebar.css"; // Import Sidebar-specific CSS
import "../App/App.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">ADMIN</div>
      <div className="sidebar-item">
        <i className="fas fa-tachometer-alt"></i>
        <span>
          <Link to="/admin/user">User</Link>
        </span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-box"></i>
        <span>
          <Link to="/admin/rooms">Rooms</Link>
        </span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-th"></i>
        <span>Booking</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-users"></i>
        <span>Customers</span>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-bell"></i>
        <span>Alerts</span>
      </div>
    </div>
  );
};

export default Sidebar;
