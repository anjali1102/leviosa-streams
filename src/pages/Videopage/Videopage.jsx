import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import styles from "./Videopage.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

const Videopage = () => {
  var { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideoInfo(response.data.video);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [videoId]);

  return (
    <main className={styles.videoPage}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
        controls={true}
        style={{ aspectRatio: "9/16" }}
        playing
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
                <div>
                  <button className={styles.button}>
                    <AiOutlineLike />
                  </button>
                </div>
                <div>
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
