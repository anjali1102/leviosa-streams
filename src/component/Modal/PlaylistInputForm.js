import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { addNewPlaylist } from "../../store/playlistSlice";
import { toast } from "react-hot-toast";
import "./Modal.css";

export default function PlaylistInputForm() {
  const [playlistName, setPlayListName] = useState("");
  const inputPlaylistDispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const addPlaylistNameHandler = async (playlistName) => {
    const playlist = { title: playlistName };
    inputPlaylistDispatch(addNewPlaylist({ playlist, token }));
    setPlayListName(" ");
    return toast.success("Playlist created!");
  };
  return (
    <div className="playlist-modal-main">
      <input
        type="text"
        placeholder="Add here..."
        className="input-playlist grow"
        autoFocus={true}
        value={playlistName}
        onChange={(e) => setPlayListName(e.target.value)}
      />
      <span
        className="plus-icon"
        onClick={() => addPlaylistNameHandler(playlistName)}
      >
        <BiPlus size="20px"/>
      </span>
    </div>
  );
}
