import { Route, Routes } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  dispatch(fetchVideos());
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
