import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../component/index";
import { STATUSES, fetchVideos } from "../../store/videoSlice";
import "./Homepage.css";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const { data, status } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const [categorySelected, setCategorySelected] = useState("All");

  const getMeCategory = (categorySelected, videolist) => {
    if (categorySelected !== "All") {
      return videolist.filter(
        (everyvideo) => everyvideo.category === categorySelected
      );
    } else {
      return videolist;
    }
  };

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // Loading timeout
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (status === STATUSES.ERROR) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      {loading ? (
        <div className="image img-responsive">
          <img src="img/loading.gif" loading={loading} className="loader" />
        </div>
      ) : (
        <div>
          <div className="category-list">
            <button
              className="chip-ctg"
              onClick={() => setCategorySelected("All")}
            >
              All
            </button>
            <button
              className="chip-ctg"
              onClick={() => setCategorySelected("Funny")}
            >
              Funny
            </button>
            <button
              className="chip-ctg"
              onClick={() => setCategorySelected("Facts")}
            >
              Facts
            </button>
            <button
              className="chip-ctg"
              onClick={() => setCategorySelected("Interview")}
            >
              Interview
            </button>
          </div>

          <main className="main-product">
            <div className="videoList-container">
              {getMeCategory(categorySelected, data)?.map((items) => {
                // const { _id, title, creator, description, profile } = items;
                return <Cards video={items} />;
              })}
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export { Homepage };
