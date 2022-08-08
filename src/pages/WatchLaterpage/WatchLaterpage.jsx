import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HistoryCards } from "../../component/Cards/HistoryCards/HistoryCards";
import "./WatchLaterpage.css";

const WatchLaterpage = () => {
  const watchlaterVideos = useSelector((store) => store.watchLater.watchLater);
  return (
    <main className="watchlater-main-product">
      {watchlaterVideos.length===0 ? <div>
              <div className="empt-watchlater">
                <h3>
                  WatchLater is Empty 🙆‍♂️ <Link to="/">Explore Videos </Link>
                </h3>
                <img
                  src="img/empty-watchlater.gif"
                  className="img-responsive"
                  height="380"
                />
              </div>
          </div>
        :
        <div className="watchlaterList-container">
          {watchlaterVideos?.map((video) => (
            <HistoryCards video={video} />
          ))}
      </div>}
    </main>
  );
};

export { WatchLaterpage };
