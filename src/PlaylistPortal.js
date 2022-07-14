import ReactDOM from "react-dom";
import Modal from "./component/Modal/Modal";
export default function PlaylistPortal({ setShowModal, video }) {
  return ReactDOM.createPortal(
    <Modal setShowModal={setShowModal} video={video} />,
    document.getElementById("modal")
  );
}
