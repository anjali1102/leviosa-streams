import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Login, SignUp } from "./component/Auth/index";
import {
  SidebarLayoutPage,
  Homepage,
  Likepage,
  Playlistpage,
  Historypage,
  WatchLaterpage,
} from "./pages/index";
import { RequireAuth } from "./Auth/RequireAuth";
import { fetchVideos } from "./videoSlice/VideoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchVideos());
  console.log(fetchVideos);
  return (
    <div className="App">
      <Routes>
        <Route element={<SidebarLayoutPage />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/likes"
            element={
              <RequireAuth>
                <Likepage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/playlist"
            element={
              <RequireAuth>
                <Playlistpage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <RequireAuth>
                <Historypage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/watchlater"
            element={
              <RequireAuth>
                <WatchLaterpage />
              </RequireAuth>
            }
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
