import "./Navbar.css";
import logo from "../../assets/logo.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        <Link to="/">
          <img src={logo} className="brand-logo" alt="logo" />
        </Link>
        <div className="nav-items">
          <span className="nav-title-main">
            LEVIOSA STREAMS : A little video for everyone.🧙
          </span>
          <div className="search">
            <input type="text" className="search-box" placeholder="search" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
