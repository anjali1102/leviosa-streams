import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HistoryCards } from "../../component/Cards/HistoryCards/HistoryCards";

const WatchLaterpage = () => {
  const watchlaterVideos = useSelector((store) => store.watchLater.watchLater);
  return (
    <main className="main-product2">
      <div className="videoList-container">
        {watchlaterVideos.length === 0 && (
          <h1 className="empt-history">
            WatchLater is Empty 🙆‍♂️ <Link to="/">Explore Videos </Link>
          </h1>
        )}
        {watchlaterVideos?.map((video) => (
          <HistoryCards video={video} />
        ))}
      </div>
    </main>
  );
};

export { WatchLaterpage };
