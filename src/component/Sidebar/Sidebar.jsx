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

// import { GoHome, GoHeart, GoHistory, GoClock, GoPlay } from "react-icons/go";
// import { FiUser, FiLogOut } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../store/authSlice";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const {
//     user: { token },
//   } = useSelector((state) => state.auth);

//   const Dispatch = useDispatch();

//   return (
//     <section className="sidebar-wrapper">
//       <aside className="component-list">
//         <ul>
//           <li>
//             <button className="component-list-item">
//               <Link to="/">
//                 <GoHome className="sidebar-icon" />
//                 Home
//               </Link>
//             </button>
//           </li>

//           <li>
//             <button className="component-list-item">
//               <Link to="/likes">
//                 <GoHeart className="sidebar-icon" />
//                 Like
//               </Link>
//             </button>
//           </li>

//           <li>
//             <button className="component-list-item">
//               <Link to="/playlist">
//                 <GoPlay className="sidebar-icon" />
//                 Playlist
//               </Link>
//             </button>
//           </li>

//           <li>
//             <button className="component-list-item">
//               <Link to="/watchlater">
//                 <GoClock className="sidebar-icon" />
//                 Watch Later
//               </Link>
//             </button>
//           </li>

//           <li>
//             <button className="component-list-item">
//               <Link to="/history">
//                 <GoHistory className="sidebar-icon" />
//                 History
//               </Link>
//             </button>
//           </li>

//           <li>
//             {token ? (
//               <button
//                 className="component-list-item"
//                 onClick={() => {
//                   Dispatch(logout());
//                 }}
//               >
//                 <FiLogOut className="sidebar-icon " />
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="component-list-item">
//                 <FiUser className="sidebar-icon" />
//                 Login
//               </Link>
//             )}
//           </li>
//         </ul>
//       </aside>
//     </section>
//   );
// };

// export { Sidebar };
