import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProfilePage = () => {
  const { id } = useParams();
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
      fetch(`http://localhost:8080/hotelManagement/user/get-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser({
            email: data.data.email,
            fullName: data.data.fullName,
            phoneNumber: data.data.phoneNumber,
            address: data.data.address,
            city: data.data.city,
            country: data.data.country,
          });
          console.log(data);
        })
        .catch((error) => {
          console.error("Đã xảy ra lỗi khi tải thông tin người dùng:", error);
        });
    }
  }, [id]);

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
    fetch(`http://localhost:8080/hotelManagement/user/update-user/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/admin/user`);
      })
      .catch((error) => {
        setErrorMessage("Đã xảy ra lỗi khi cập nhật thông tin người dùng.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="update-profile-container">
      <div className="update-profile-form">
        <h1 className="update-profile-title">Cập nhật thông tin</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="update-profile-input"
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
                className="update-profile-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Số điện thoại:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
                className="update-profile-input"
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
                className="update-profile-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">Thành phố:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={user.city}
                onChange={handleInputChange}
                className="update-profile-input"
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
                className="update-profile-input"
              />
            </div>
          </div>
          <button type="submit" className="update-profile-button">
            Cập nhật
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
