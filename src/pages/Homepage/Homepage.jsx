import React, { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../component";
import axios from "axios";
import Cards from "../../component/Cards/Cards";

const Homepage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/videos");
      setVideos(data.videos);
    })();
  }, []);
  // console.log(videos);
  return (
    <main className="main-product">
      <div className="videoList-container">
        {videos.map((items) => {
          const { _id, title, creator, description } = items;

          return (
            <Cards
              _id={_id}
              title={title}
              creator={creator}
              description={description}
            />
          );
        })}
      </div>
    </main>
  );
};

export { Homepage };
