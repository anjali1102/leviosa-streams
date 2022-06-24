import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../../Auth/AuthContext";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const dispatch=useDispatch()
  // const signup = () => {
  //   setUser("anjali");
  // };

  const login = (email, password) => {
    axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then(function (response) {
        setUser(response.data.foundUser);
        setToken(response.data.encodedToken);
        // localStorage.setItem("user", JSON.stringify(response.data.user));
        // localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const logout = () => {
    // localStorage.removeItem("user");
    setUser(null);
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
            {/* <span></span> */}
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
