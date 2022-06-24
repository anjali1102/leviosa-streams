import "./Sidebar.css";
import { GoHome, GoHeart, GoHistory, GoClock, GoPlay } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="sidebar-wrapper">
      <aside className="component-list">
        <ul>
          <li>
            <Link to="/" className="component-list-item">
              <GoHome className="sidebar-icon" />
              Home
            </Link>
          </li>

          <li className="">
            <Link to="/likes" className="component-list-item">
              <GoHeart className="sidebar-icon" />
              Like
            </Link>
          </li>

          <li>
            <Link to="/playlist" className="component-list-item">
              <GoPlay className="sidebar-icon" />
              Playlist
            </Link>
          </li>

          <li>
            <Link to="/watchlater" className="component-list-item">
              <GoClock className="sidebar-icon" />
              Watch Later
            </Link>
          </li>

          <li>
            <Link to="/history" className="component-list-item">
              <GoHistory className="sidebar-icon" />
              History
            </Link>
          </li>

          <li>
            <Link to="/login" className="component-list-item">
              <FiUser className="sidebar-icon" />
              Login
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export { Sidebar };
