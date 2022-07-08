import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import "./App.css";

import {
  SidebarLayoutPage,
  Homepage,
  Likepage,
  Playlistpage,
  Historypage,
  WatchLaterpage,
} from "./pages/index";

import { useDispatch } from "react-redux";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { fetchVideos } from "./store/videoSlice";
import { RequireAuth } from "./requireAuth";
import { Videopage } from "./pages/Videopage/Videopage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  // dispatch(fetchVideos());
  return (
    <div className="App">
      <Routes>
        <Route element={<SidebarLayoutPage />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/likes"
            element={
              <RequireAuth>
                <Likepage />
              </RequireAuth>
            }
          />
          <Route
            path="/playlist"
            element={
              <RequireAuth>
                <Playlistpage />
              </RequireAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequireAuth>
                <Historypage />
              </RequireAuth>
            }
          />
          <Route
            path="/watchlater"
            element={
              <RequireAuth>
                <WatchLaterpage />
              </RequireAuth>
            }
          />
          <Route path="video/:videoId" element={<Videopage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mockapi" element={<Mockman />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
