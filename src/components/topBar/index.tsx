import AddIcon from "../../assets/icons/add.svg";
import CameraIcon from "../../assets/icons/camera.svg";
import MoreIcon from "../../assets/icons/more.svg";

export const TopBar: React.FC = () => (
  <div className="top-bar">
    <div className="actions">
      <img src={MoreIcon} alt="More" />

      <div className="actions">
        <img src={CameraIcon} alt="Camera" />
        <img src={AddIcon} alt="Add" />
      </div>
    </div>
    <h1 className="title">Chats</h1>
  </div>
);
