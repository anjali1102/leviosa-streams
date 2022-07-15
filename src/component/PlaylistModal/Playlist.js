import React, { useEffect } from "react";
import { getAllPlaylists, deletePlaylist } from "../../store/playlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import VideoCard from "../Cards/VideoCards/VideoCards";

export default function Playlist() {
  const playlistDispatch = useDispatch();

  useEffect(() => {
    playlistDispatch(getAllPlaylists());
  }, [playlistDispatch]);

  const playlistData = useSelector((state) => state.playlists.playlists);
  return (
    <div>
      {playlistData.length > 0 ? (
        <div>
          {playlistData.map((playlist) => {
            return (
              <div key={playlist._id}>
                <div>
                  <h4>{playlist.title}</h4>
                  <FaTrash
                    title="delete playlist"
                    onClick={() => {
                      deletePlaylistName(playlist._id);
                    }}
                  />
                </div>
                <div>
                  {playlist.videos.map((video) => {
                    return (
                      <VideoCard
                        video={video}
                        key={video._id}
                        isPlaylist={true}
                        playlistId={playlist._id}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h4>Please create playlist from home or video page...</h4>
        </div>
      )}
    </div>
  );
}
