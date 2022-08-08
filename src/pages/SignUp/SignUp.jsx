import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../store/authSlice";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./SignUp.css";
import { validateEmail, validatePassword } from "../../utils/validation.js";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmailAndPass(email, password)) {
      dispatch(signUpUser({ firstName, lastName, email, password, navigate }));
    }
  };

  const visibilityHandler = () => {
    return passType === "password"
      ? setPassType("text")
      : setPassType("password");
  };

  // Validating email and password
  const validateEmailAndPass = (email, password) => {
    if (validateEmail(email) && validatePassword(password)) {
      return true;
    } else if (!validateEmail(email)) {
      toast.error("Enter a valid email");
    } else if (!validatePassword(password)) {
      toast.error("Password must include a number, Minimum 6 char");
    }
  };

  return (
    <div className="main-signup">
      <div className="center">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
            <label>First Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <label>Last Name</label>
          </div>
          <div className="txt_field ">
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button className="btn btn-success" type="submit" value="Register">
            Create New Account
          </button>
          <div className="signup_link">
            Already have a account |
            <Link to="/login">
              <b>Login</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export { SignUp };
