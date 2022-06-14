import "./Navbar.css";
import logo  from "../../assets/logo.gif";
import { Link } from "react-router-dom";
import { FaSun, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        <Link to="/">
          <img src={logo} className="brand-logo" alt="logo" />
        </Link>
        <div className="nav-items">
          <div className="search">
            <input type="text" className="search-box" placeholder="search" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <Link to="">
            <FaSun size={25} />
            <span className="themeBackground">{}</span>
          </Link>
          <Link to="">
            <FaUser size={25} />
            <span className="user-icon">{}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
