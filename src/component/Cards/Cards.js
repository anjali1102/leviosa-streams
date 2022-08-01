import React from "react";
import "../Cards/Cards.css";
import { addToWatchLater } from "../../store/watchLaterSlice";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToLikes } from "../../store/likeSlice";

const Cards = ({ video }) => {
  const { _id, title, creator, profile } = video;
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const watchLaterHandler = () => {
    if (token) {
      dispatch(addToWatchLater({ video: video, token: token }));
    } else {
      toast.error("Login First");
    }
  };

  const likeHandler = () => {
    if (token) {
      dispatch(addToLikes({ video: video, token: token }));
    } else {
      toast.error("Login First");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            className="card-image"
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt={_id}
          />
        </Link>

        <div className="card-info">
          <div className="card-heading">
            <div></div>
            <h3 className="card-title-header">{title}</h3>
          </div>
          <div className="video-desc">
            <img
              className="disc creator-avator avator-xs-size"
              src={profile}
              alt={title}
            />
            <p className="disc">{creator}</p>
            <div>
              <MdOutlineWatchLater
                className="watchLater-icon"
                onClick={watchLaterHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cards };
