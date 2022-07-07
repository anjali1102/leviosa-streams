import React from "react";
import { Link } from "react-router-dom";
import "../../Cards/Cards.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes, getLikes } from "../../../store/likeSlice";

const VideoCards = ({ _id, title, creator, profile }) => {
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const Dispatch = useDispatch();

  return (
    <div className="videoCards-cont">
      <div className="card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            className="card-image"
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt={_id}
          />
          <IoIosCloseCircle
            className="close-icon"
            onClick={() =>
              Dispatch(removeFromLikes({ videoId: _id, token: token }))
            }
          />
        </Link>

        <div className="card-info">
          <div className="card-heading">
            <div></div>
            <h3 className="card-title-header">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCards };
