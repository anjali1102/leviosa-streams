import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const login = (email, password) => {
    dispatch(loginUser({ email, password }));
    navigate(from, { replace: true });
  };

  const loginWithGuest = (e) => {
    e.preventDefault();
    login("anjaliChauhan@gmail.com", "123");
  };

  return (
    <div className="main-login">
      <div className="center">
        <h1>Login</h1>
        <form>
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
          <div className="txt_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="fa fa-eye-slash icon"
              required
            />
            <label>Password</label>
          </div>
          <button className="btn btn-success" type="submit">
            Login
          </button>
          <button className="btn btn-success" onClick={loginWithGuest}>
            GUEST LOGIN
          </button>
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
