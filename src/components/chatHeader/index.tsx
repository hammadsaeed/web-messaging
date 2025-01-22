import "./index.scss";
import BackIcon from "../../assets/icons/back.svg";
import VideoCallIcon from "../../assets/icons/video-call.svg";
import CallIcon from "../../assets/icons/call.svg";

interface ChatHeaderProps {
  img: string;
  name: string;
  handleBack: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  handleBack,
  img,
  name,
}) => {
  return (
    <div className="header-container">
      <div className="back-button" onClick={handleBack}>
        <img src={BackIcon} alt="back-icon" />
      </div>
      <div className="contact-tag ">
        <div className="avatar">
          <img src={img} />
        </div>
        <div className="details">
          <h3 className="contact-name">{name}</h3>
          <p>tap here for contact info</p>
        </div>
      </div>
      <div className="icon-container">
        <img src={VideoCallIcon} alt="video-call-icon" />
        <img src={CallIcon} alt="call-icon" />
      </div>
    </div>
  );
};
