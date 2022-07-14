import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import styles from "./Videopage.module.css";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { addToLikes, removeFromLikes } from "../../store/likeSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToHistory } from "../../store/historySlice";
import PlaylistPortal from "../../PlaylistPortal";
// import { postPlaylist } from "../../store/playlistSlice";

const checkIfPresentLikes = (likes, videoId) => {
  return likes.some((item) => item._id === videoId);
};

const Videopage = () => {
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const { likes } = useSelector((store) => store.like);

  var { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const Dispatch = useDispatch();

  const [presentInLikes, setPresentInLikes] = useState(
    checkIfPresentLikes(likes, videoId)
  );
  const [showModal, setShowModal] = useState(false);
  const likeHandler = () => {
    if (token) {
      if (checkIfPresentLikes(likes, videoId)) {
        Dispatch(removeFromLikes({ videoId: videoId, token: token }));
      } else {
        Dispatch(addToLikes({ videoInfo: videoInfo, token: token }));
      }
      return;
    }
    toast.warning("Kindly Login to add Likes");
  };

  //playlistHandler
  // const playlistHandler = () => {

  //     Dispatch(postPlaylist({ token: token }));

  // };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideoInfo(response.data.video);
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, [videoId]);

  useEffect(() => {
    if (checkIfPresentLikes(likes, videoId)) {
      setPresentInLikes(true);
    } else {
      setPresentInLikes(false);
    }
  }, [likes, videoId]);

  return (
    <main className={styles.videoPage}>
      {showModal ? (
        <PlaylistPortal setShowModal={setShowModal} video={videoInfo} />
      ) : null}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
        controls={true}
        style={{ aspectRatio: "9/16" }}
        playing
        onPlay={() => Dispatch(addToHistory({ video: videoInfo, token }))}
      ></ReactPlayer>

      {videoInfo && (
        <section>
          <div className="videopg_main-con">
            <h2 className={styles.title}>{videoInfo?.title}</h2>
            <div className={styles.videoDesc}>
              <img
                className={styles.videoImg}
                src={videoInfo?.profile}
                alt={videoInfo?.profile}
              />
              <div className={styles.creator} src={videoInfo?.creator}>
                {videoInfo?.creator}
              </div>
              <div className={styles.buttons}>
                <div onClick={likeHandler}>
                  {presentInLikes ? (
                    <button className={styles.button}>
                      <AiTwotoneLike className={styles.button} />
                    </button>
                  ) : (
                    <button className={styles.button}>
                      <AiOutlineLike />
                    </button>
                  )}
                </div>
                <div onClick={() => setShowModal(true)}>
                  <MdPlaylistAdd className={styles.button} />
                </div>
              </div>
            </div>
            <div className={videoInfo.description}>
              {videoInfo?.description}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
export { Videopage };
