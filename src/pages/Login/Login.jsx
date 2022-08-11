import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const login = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  const loginWithGuest = (e) => {
    e.preventDefault();
    login("anjali@gmail.com", "anjali123");
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const visibilityHandler = () => {
    return passType === "password"
      ? setPassType("text")
      : setPassType("password");
  };

  return (
    <div className="main-login">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={loginFormSubmitHandler}>
          <div className="txt_field">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="txt_field password-section">
            {passType === "password" ? (
              <AiFillEyeInvisible
                className="passw-eye-icon"
                onClick={visibilityHandler}
              />
            ) : (
              <AiFillEye
                className="passw-eye-icon"
                onClick={visibilityHandler}
              />
            )}
            <input
              type={passType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="fa fa-eye-slash icon"
              required
            />
            <label>Password</label>
          </div>
          <div className="login-btn-main">
            <button className="btn btn-success" type="submit">
              Login
            </button>
            <button className="btn btn-success" onClick={loginWithGuest}>
              Login with Test Credentials
            </button>
          </div>
          <div className="signup_link">
            Create Your Account |{" "}
            <Link to="/signup">
              <b>Signup</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
