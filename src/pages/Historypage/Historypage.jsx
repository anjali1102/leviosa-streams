import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllHistory, getHistory } from "../../store/historySlice";
import "../Homepage/Homepage.css";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { Link } from "react-router-dom";

const Historypage = () => {
  const [videoList, setVideoList] = useState([]);
  const dispatch = useDispatch();

  const {
    user: { token },
  } = useSelector((store) => store.auth);
  const { histories, status } = useSelector((store) => store.history);
  const { data: videosFromStore } = useSelector((state) => state.video);

  const ClearAllHistory = () => {
    dispatch(clearAllHistory({ token: token }));
  };

  useEffect(() => {
    const filteredVideos = videosFromStore.filter((video) =>
      histories.some((ele) => ele._id === video._id)
    );
    // console.log(histories);
    setVideoList(filteredVideos);
  }, [histories]);

  useEffect(() => {
    const data = { token: token };
    dispatch(getHistory(data));
  }, []);

  return (
    <main className="main-product">
      {status !== "loading" && histories.length === 0 && (
        <h1 className="empt-history">
          History is Empty 💔 <Link to="/">Explore Videos </Link>
        </h1>
      )}
      {videoList.length > 0 && (
        <div className="clearButton">
          <button onClick={ClearAllHistory}>Clear History</button>
        </div>
      )}
      <div className="videoList-container">
        {videoList?.map(({ _id, title, creator, profile }) => (
          <VideoCards
            key={_id}
            _id={_id}
            title={title}
            creator={creator}
            profile={profile}
          />
        ))}
      </div>
    </main>
  );
};

export { Historypage };
