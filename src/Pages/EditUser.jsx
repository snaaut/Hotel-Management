import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditUserPage = () => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:8080/hotelManagement/user/my-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data.Info);
        })
        .catch((error) => {
          console.error("Đã xảy ra lỗi khi tải thông tin người dùng:", error);
        });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const updatedUser = {
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      city: user.city,
      country: user.country,
    };
    fetch("http://localhost:8080/hotelManagement/user/my-info/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        history.push(`/`);

        // Xử lý phản hồi từ server (nếu cần)
      })
      .catch((error) => {
        setErrorMessage("Đã xảy ra lỗi khi cập nhật thông tin người dùng.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-title">Chỉnh sửa thông tin</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={user.fullName}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Thành phố:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={user.city}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Quốc gia:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={user.country}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button">
            Cập nhật
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
