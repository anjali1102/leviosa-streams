import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VideoCards } from "../../component/Cards/VideoCards/VideoCards";
import { getAllPlaylist, deletePlaylist } from "../../store/playlistSlice";
import { FaTrash } from "react-icons/fa";
import "./Playlistpage.css";

const Playlistpage = () => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((store) => store.playlist);
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllPlaylist({ token }));
  }, []);

  const deleteWholePlaylist = (playlistId) => {
    dispatch(deletePlaylist({ token, playlistId }));
  };

  return (
    <main className="main-product3">
      <div className="playlist-container">
        {playlist.length === 0 && (
          <div className="empt-playlist">
            <div className="em-play-img">
              <h1>
                Playlist is Empty 😟<Link to="/">Explore Videos </Link>
              </h1>
              <img
                className="img-responsive"
                src="img/empty-playlist.gif"
                height="100"
              />
            </div>
          </div>
        )}
        {playlist.map((everyPlaylist) => {
          return (
            <div className="playlistVideo" key={everyPlaylist._id}>
              <div className="playlistName-title">
                <h1>{everyPlaylist.title}</h1>
                <FaTrash
                  className="playlistDeleteIcon"
                  onClick={() => deleteWholePlaylist(everyPlaylist._id)}
                />
              </div>
              <div className="d-flex">
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
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export { Playlistpage };
