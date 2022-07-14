import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { playlistaction } from "../../store/PlayList/playlistmodel-slice";
import { PlayListContent } from "./PlayListContent";
const PlayListModal = () => {
  const dispatch = useDispatch();
//   const modalSelected = useSelector((state) => state.playlist.modalSelected);
  const closeModalSelected = () => {
    dispatch(playlistaction.setModalSelected(false));
  };
  useEffect(() => {
    if (modalSelected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [modalSelected]);

  return ReactDOM.createPortal(
    <main>
      <PlayListContent
        modalSelected={modalSelected}
        closeModalSelected={closeModalSelected}
      />
    </main>,
    document.getElementById("playlistmodal")
  );
};

export default PlayListModal;
