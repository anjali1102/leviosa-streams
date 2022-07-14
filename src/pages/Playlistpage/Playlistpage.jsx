import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { HistoryCards } from "../../component/Cards/HistoryCards/HistoryCards";
import { Link } from "react-router-dom";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { getAllPlaylist } from "../../store/playlistSlice";

const Playlistpage = () => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((store) => store.playlist);
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllPlaylist({ token }));
  }, []);

  return (
    <main className="main-product2">
      <div className="videoList-container">
        {playlist.length === 0 && (
          <h1 className="empt-history">
            Playlist is Empty 😟<Link to="/">Explore Videos </Link>
          </h1>
        )}
        {playlist.map((everyPlaylist) => {
          return (
            <>
              <h1>{everyPlaylist.title}</h1>
              {everyPlaylist.videos.map((everyVideo) => {
                const { _id, title, creator, profile } = everyVideo;
                return (
                  <VideoCards
                    _id={_id}
                    title={title}
                    creator={creator}
                    profile={profile}
                    playlistDetails={everyPlaylist}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </main>
  );
};

export { Playlistpage };
