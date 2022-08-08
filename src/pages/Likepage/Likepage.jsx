import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { getLikes } from "../../store/likeSlice";
import "../Likepage/Likepage.css";

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
    <main className="main-product-like">
      {likes.length === 0 ? (
        <div>
          <div className="empty-like-main">
            <h1 className="empt-like">
              No Likes ☹️, {""}
              <Link to="/">Explore Videos </Link>
            </h1>
            <img
              className="img-responsive"
              src="/img/empty-like.gif"
              height="300"
            />
          </div>
        </div>
      ) : (
        <div className="likeList-container">
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
      )}
    </main>
  );
};
export { Likepage };
