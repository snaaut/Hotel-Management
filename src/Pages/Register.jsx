import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu xác nhận không khớp");
      return;
    }

    // Gửi dữ liệu đăng ký đến API
    const registerInfo = {
      userName: username,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
    };

    fetch("http://localhost:8080/hotelManagement/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        const token = data.token;
        localStorage.setItem("token", token);
        history.push(`/edit`);
      })
      .catch((error) => {
        console.error("Đăng ký thất bại:", error);
        setErrorMessage("Đăng ký thất bại. Vui lòng thử lại sau!");
      });
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button className="register-button" type="submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
