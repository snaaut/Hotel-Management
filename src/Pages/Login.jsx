import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userLogin = {
      userName: username,
      password: password,
    };

    fetch("http://localhost:8080/hotelManagement/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          const token = data.token;
          const role = data.role;
          const idUser = data.idUser;
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("idUser", idUser);
          // alert(data.msg);
          if (role === "ADMIN") {
            history.push("/admin");
          } else {
            history.push("/");
          }
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="login-form__title">Login</h1>
      {error && <div className="login-form__error-message">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-form__label" htmlFor="username">
            Username:
          </label>
          <input
            className="login-form__input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label className="login-form__label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-form__input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-form__button" type="submit">
          Login
        </button>
      </form>
      <div className="register-link">
        You have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginForm;
