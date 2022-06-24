import { useEffect, useState } from "react";
import axios from "axios";
import { Cards } from "../../component/index";
import "./Homepage.css";
import { useSelector } from "react-redux";
import { STATUSES } from "../store/videoSlice";

const Homepage = () => {
  const [videos, setVideos] = useState([]);
  const { data, status } = useSelector((state) => state.video);
  console.log(data);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("/api/videos");
  //     setVideos(data.videos);
  //   })();
  // }, []);
  // console.log(videos);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      <div className="category-list">
        <button className="chip-ctg">Coding</button>
        <button className="chip-ctg">Podcasts</button>
        <button className="chip-ctg">Money</button>
        <button className="chip-ctg">All</button>
      </div>

      <main className="main-product">
        <div className="videoList-container">
          {data?.map((items) => {
            const { _id, title, creator, description, profile } = items;
            console.log(title);

            return (
              <Cards
                _id={_id}
                title={title}
                creator={creator}
                description={description}
                profile={profile}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export { Homepage };
