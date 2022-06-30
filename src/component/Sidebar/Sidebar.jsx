import "./Sidebar.css";
import { GoHome, GoHeart, GoHistory, GoClock, GoPlay } from "react-icons/go";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Sidebar = () => {
  const [getToken, setgetToken] = useState(localStorage.getItem("token"));

  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const Dispatch = useDispatch();

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
            {token ? (
              <button className="component-list-item" onClick={()=>{Dispatch(logout())}}>
                <FiLogOut className="sidebar-icon " />
                Logout
              </button>
            ) : (
              <Link to="/login" className="component-list-item">
                <FiUser className="sidebar-icon" />
                Login
              </Link>
            )}
          </li>
        </ul>
      </aside>
    </section>
  );
};

export { Sidebar };
