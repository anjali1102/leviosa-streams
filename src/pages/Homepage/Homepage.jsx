import { useEffect } from "react";
import "./Homepage.css";
import { Cards } from "../../component/index";
import { useSelector, useDispatch } from "react-redux";
import { STATUSES, fetchVideos } from "../../store/videoSlice";

const Homepage = () => {
  const { data, status } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

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
