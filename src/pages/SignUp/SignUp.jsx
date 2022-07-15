import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="main-signup">
      <div className="center">
        <h1>Sign Up</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              required
            />
            <label>Enter your Full Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
            />
            <label>Email Address</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
            />
            <label>Password</label>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            value="Register"
          >
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
