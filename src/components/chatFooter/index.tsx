import "./index.scss";
import CameraIcon from "../../assets/icons/camera-blue.svg";
import RecordAudioIcon from "../../assets/icons/record-audio.svg";
import PlusIcon from "../../assets/icons/plus.svg";

export const ChatFooter: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="back-button">
        <img src={PlusIcon} alt="back-icon" />
      </div>
      <div className="chat-bar">
        <input type="text" placeholder="" />
      </div>
      <div className="icon-container">
        <img src={CameraIcon} alt="call-icon" />
        <img src={RecordAudioIcon} alt="video-call-icon" />
      </div>
    </div>
  );
};
