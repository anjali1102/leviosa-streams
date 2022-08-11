import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWatchLater } from "../../../store/watchLaterSlice";
import "../Cards.css";

const HistoryCards = ({ video }) => {
  const { _id, title, creator, profile } = video;
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const deleteWatchLaterHandler = () => {
    if (token) {
      dispatch(deleteWatchLater({ videoId: _id, token: token }));
    }
  };

  return (
    <div>
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
            <div className="del-icon-cont">
              <RiDeleteBinLine
                className="del-icon"
                onClick={deleteWatchLaterHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HistoryCards };
