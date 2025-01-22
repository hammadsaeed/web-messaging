import StatusIcon from "../../assets/icons/status.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import CameraIcon from "../../assets/icons/camera-grey.svg";
import ChatIcon from "../../assets/icons/messages.svg";
import SettingIcon from "../../assets/icons/settings.svg";

import "./index.scss";

export const BottomBar: React.FC = () => (
  <div className="bottom-bar">
    <div className="nav-item ">
      <img src={StatusIcon} alt="Status" />
      <p>Status</p>
    </div>
    <div className="nav-item">
      <img src={PhoneIcon} alt="Calls" />
      <p>Calls</p>
    </div>
    <div className="nav-item">
      <img src={CameraIcon} alt="Camera" />
      <p>Camera</p>
    </div>
    <div className="nav-item active">
      <img src={ChatIcon} alt="Chats" />
      <p>Chats</p>
    </div>
    <div className="nav-item">
      <img src={SettingIcon} alt="Settings" />
      <p>Settings</p>
    </div>
  </div>
);
