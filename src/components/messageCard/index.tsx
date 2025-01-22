import { Conversation, MESSAGETYPE } from "../../types/index.d";
import MicIcon from "../../assets/icons/voice-record.svg";
import CameraIcon from "../../assets/icons/camera-colored.svg";
import ReadIcon from "../../assets/icons/read.svg";
import "./index.scss";

interface MessageCardProps {
  conversation: Conversation;
}

interface MessageListProps {
  conversations: Conversation[];
  setSelected: (data: Conversation) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  conversations,
  setSelected,
}) => (
  <div className="message-list">
    {conversations.map((conversation, index) => {
      return (
        <div onClick={() => setSelected(conversation)} key={conversation.name}>
          <MessageCard key={index} conversation={conversation} />
        </div>
      );
    })}
  </div>
);

const MessageCard: React.FC<MessageCardProps> = ({ conversation }) => {
  const { name, type, text, audio, lastMessageAt, img } = conversation;

  const renderMessageContent = () => {
    if (type === MESSAGETYPE.TEXT && text)
      return (
        <p className="last-message-container">
          <img src={ReadIcon} alt="mic-icon" />{" "}
          <p className="last-message"> {text.message}</p>
        </p>
      );
    if (type === MESSAGETYPE.AUDIO && audio)
      return (
        <p className="last-message-container">
          <img src={MicIcon} alt="mic-icon" />{" "}
          <p className="last-message"> {audio.length}</p>
        </p>
      );
    if (type === MESSAGETYPE.PHOTO)
      return (
        <p className="last-message-container">
          <img src={CameraIcon} alt="camera-icon" />
          <p className="last-message"> Photo</p>
        </p>
      );

    return "";
  };

  return (
    <div className={`message-card`}>
      <div className="avatar">
        <img src={img} />
      </div>
      <div className="text-container">
        <div className="details">
          <p className="name">{name}</p>
          {renderMessageContent()}
        </div>
        <div className="timestamp">
          {new Date(lastMessageAt).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};
