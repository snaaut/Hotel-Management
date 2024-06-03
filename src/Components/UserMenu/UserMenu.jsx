// import React, { useState } from "react";

import { useState } from "react";
import avatar from "../../assets/img/svg/avatar.svg";

const UserMenu = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    // Xử lý logic khi người dùng chọn một tùy chọn trong danh sách
    // Ví dụ: chuyển hướng đến trang chỉnh sửa thông tin người dùng
    if (option === "editUser") {
      // Do something
    }
  };

  return (
    <div className="user-menu">
      <div className="avatar" onClick={toggleMenu}>
        {/* Thay thế thành avatar của người dùng */}
        <img src={avatar} alt="Avatar" />
      </div>
      {isMenuOpen && (
        <ul className="menu-list">
          <li onClick={() => handleOptionClick("editUser")}>Edit User</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
