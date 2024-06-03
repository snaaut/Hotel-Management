// components/DashboardContent.js
import React from "react";
// import "./DashboardContent.css"; // Import DashboardContent-specific CSS

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-section">
        <h2>PRODUCTS</h2>
        <div className="data-box">249</div>
      </div>
      <div className="dashboard-section">
        <h2>CATEGORIES</h2>
        <div className="data-box">25</div>
      </div>
      <div className="dashboard-section">
        <h2>CUSTOMERS</h2>
        <div className="data-box">1500</div>
      </div>
      <div className="dashboard-section">
        <h2>ALERTS</h2>
        <div className="data-box">56</div>
      </div>
      <div className="chart-section">
        {/* Thêm code để hiển thị biểu đồ ở đây */}
      </div>
    </div>
  );
};

export default DashboardContent;
