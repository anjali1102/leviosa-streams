import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Cards/Cards.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes } from "../../../store/likeSlice";
import { removeFromHistory } from "../../../store/historySlice";

const VideoCards = ({ _id, title, creator, profile }) => {
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const Dispatch = useDispatch();
  const Location = useLocation();

  return (
    <div className="videoCards-cont">
      <div className="card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            className="card-image"
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt={_id}
          />
        </Link>
        <IoIosCloseCircle
          className="close-icon"
          onClick={() => {
            if (Location.pathname === "/likes") {
              Dispatch(removeFromLikes({ videoId: _id, token }));
            } else if (Location.pathname === "/history") {
              Dispatch(removeFromHistory({ videoId: _id, token }));
            }
          }}
        />

        <div className="card-info">
          <div className="card-heading">
            <h3 className="card-title-header">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCards };
