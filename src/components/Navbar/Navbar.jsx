import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        {/* <Link to="/">
          <img
            src="/img/Hogwarts Supplies.png"
            className="brand-logo"
            alt="logo"
          />
        </Link> */}
        <div className="nav-items">
          <div className="search">
            <input type="text" className="search-box" placeholder="search" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="dark-mode">
            <FaMoon size={25} />
          </div>
          <div className="user">
            <FaUserCircle size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
