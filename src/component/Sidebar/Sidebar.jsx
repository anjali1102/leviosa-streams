import React from "react";
import { GoHome, GoHeart, GoHistory, GoClock, GoPlay } from "react-icons/go";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/authSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const Dispatch = useDispatch();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <Link to="/">
          <li className="listRow">
            <div id="icon">
              <GoHome />
            </div>
            <div id="title">Home</div>
          </li>
        </Link>

        <Link to="/likes">
          <li className="listRow">
            <div id="icon">
              <GoHeart />
            </div>
            <div id="title">Like</div>
          </li>
        </Link>

        <Link to="/playlist">
          <li className="listRow">
            <div id="icon">
              <GoPlay />
            </div>
            <div id="title">Playlist</div>
          </li>
        </Link>

        <Link to="/watchlater">
          <li className="listRow">
            <div id="icon">
              <GoClock />
            </div>
            <div id="title">Watch Later</div>
          </li>
        </Link>

        <Link to="/history">
          <li className="listRow">
            <div id="icon">
              <GoHistory />
            </div>
            <div id="title">History</div>
          </li>
        </Link>

        <li>
          {token ? (
            <button
              className="listRow"
              onClick={() => {
                Dispatch(logout());
              }}
            >
              <div id="icon">
                <FiLogOut />
              </div>
              <div id="title">Logout</div>
            </button>
          ) : (
            <Link to="/login" className="listRow">
              <div id="icon">
                <FiUser />
              </div>
              <div id="title">Login</div>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
