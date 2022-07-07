import React from "react";
import { GoHome, GoHeart, GoHistory, GoClock, GoPlay } from "react-icons/go";
import { Link } from "react-router-dom";

import "./Sidebar.css";
const Sidebar = () => {
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
      </ul>
    </div>
  );
};

export { Sidebar };

