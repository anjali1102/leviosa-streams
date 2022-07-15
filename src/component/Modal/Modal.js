import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PlaylistInputForm from "./PlaylistInputForm";
import {
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../store/playlistSlice";
import { toast } from "react-toastify";
import "./Modal.css";

export default function Modal({ setShowModal, video }) {
  const playlistsData = useSelector((state) => state.playlist.playlist);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const playlistDispatch = useDispatch();
  const deletePlaylistName = async (playlistId) => {
    playlistDispatch(deletePlaylist({ token, playlistId }));
    return toast.success("Removed playlist successfully!");
  };

  const addVideoToPlayList = async (video, playlistId) => {
    playlistDispatch(addVideoToPlaylist({ video, playlistId, token }));
    return toast.success("Added video to playlist!");
  };
  const removeVideoFromPlayList = async (videoId, playlistId) => {
    playlistDispatch(removeVideoFromPlaylist({ videoId, playlistId, token }));
    return toast.success("Removed video from playlist!");
  };
  const isInPlaylist = (PlaylistId, videoId) =>
    playlistsData.some((playlist) =>
      playlist._id === PlaylistId
        ? playlist.videos.some((video) => video._id === videoId)
        : false
    );

  const updatePlaylist = (e, video, playlistId) => {
    e.target.checked
      ? addVideoToPlayList(video, playlistId)
      : removeVideoFromPlayList(video._id, playlistId);
  };
  return (
    <div className="modal">
      <div>
        <div>
          <p onClick={() => setShowModal(false)} className="cursor-pointer">
            X
          </p>
        </div>
        <div>
          <p>Add to existing playlist :</p>
          {playlistsData.map((playlist) => (
            <div key={playlist._id}>
              <div>
                <input
                  type="checkbox"
                  id={playlist._id}
                  className="input-playlist"
                  onChange={(e) => {
                    updatePlaylist(e, video, playlist._id);
                  }}
                />
                <label htmlFor={playlist._id}> {playlist.title}</label>
              </div>

              <FaTrash
                className="cursor-pointer white-text-color mt-1 fs-1"
                onClick={() => {
                  deletePlaylistName(playlist._id);
                }}
              />
            </div>
          ))}
        </div>

        <div>
          <p>Create new playlist :</p>
          <PlaylistInputForm className="input-playlist" />
        </div>
      </div>
    </div>
  );
}
