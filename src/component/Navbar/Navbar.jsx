import "./Navbar.css";
import logo from "../../assets/logo.gif";
import { Link } from "react-router-dom";
// import { FaSun } from "react-icons/fa";

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

          {/* 
          //will implement it 
          <Link to="" className="themeBackground">
            <FaSun size={25} />
            <span>{}</span>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
