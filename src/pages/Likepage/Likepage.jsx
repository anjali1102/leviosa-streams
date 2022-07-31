import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { getLikes } from "../../store/likeSlice";
import "../Homepage/Homepage.css";

const Likepage = () => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);
  const { likes } = useSelector((store) => store.like);

  useEffect(() => {
    const data = { token: token };
    dispatch(getLikes(data));
  }, []);

  return (
    <main className="main-product">
      <div className="videoList-container">
        {likes.length === 0 && (
          <div className="empty-like-main">
            <h1 className="empt-like">
              No Likes ☹️, {""}
              <Link to="/">Explore Videos </Link>
            </h1>
            <img src="/img/empty-like.gif" height="300" />
          </div>
        )}
        {likes?.map(({ _id, title, creator, profile }) => {
          return (
            <VideoCards
              key={_id}
              _id={_id}
              title={title}
              creator={creator}
              profile={profile}
            />
          );
        })}
      </div>
    </main>
  );
};
export { Likepage };
