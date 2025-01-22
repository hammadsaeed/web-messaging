import React, { useEffect, useState } from "react";
import {
  Conversation,
  Message,
  MessageData,
  MESSAGETYPE,
} from "../../types/index.d";
import Chat from "../../services";
import "./index.scss";
import FileIcon from "../../assets/icons/file.png";
import ReadIcon from "../../assets/icons/read.svg";
import { ChatHeader } from "../../components/chatHeader";
import { ChatFooter } from "../../components/chatFooter";

interface ConversationPageProps {
  selected: Conversation;
  setSelected: (data: Conversation | null) => void;
}

const ConversationPage: React.FC<ConversationPageProps> = ({
  selected,
  setSelected,
}) => {
  const [data, setData] = useState<MessageData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Chat.messages();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBack = () => {
    setSelected(null);
  };

  const renderMessage = (message: Message, index: number) => {
    const messageTime = new Date(message.sentAt).toLocaleTimeString();

    return (
      <div
        key={`${message.text}-${index}`}
        className={`message ${message.sentBy === "self" ? "sent" : "received"}`}
      >
        {message.type === MESSAGETYPE.TEXT && (
          <div
            className={`message-text ${
              message.sentBy === "self" ? "sent" : "received"
            }`}
          >
            <div>{message.text}</div>

            <span className="message-time">
              {messageTime}{" "}
              {message.sentBy === "self" && (
                <img src={ReadIcon} alt="file-icon" />
              )}
            </span>
          </div>
        )}
        {message.type === MESSAGETYPE.PHOTO && (
          <div className="message-image">
            <div className="icon-container">
              <img src={FileIcon} alt="file-icon" />
              <span>IMG_0475</span>
            </div>
            <div>{message.text}</div>
            <span className="message-time">
              {messageTime}{" "}
              {message.sentBy === "self" && (
                <img src={ReadIcon} alt="file-icon" />
              )}
            </span>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="conversation-page">
      <ChatHeader
        img={selected.img || ""}
        name={data?.contact?.name || ""}
        handleBack={handleBack}
      />
      <div className="messages-container">
        {data?.messages.map(renderMessage)}
      </div>
      <ChatFooter />
    </div>
  );
};

export default ConversationPage;
