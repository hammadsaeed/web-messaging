import React, { useState } from "react";
import ChatPage from "./pages/chats";
import "./App.scss";
import { Conversation } from "./types";
import ConversationPage from "./pages/conversations";

const App: React.FC = () => {
  const [selected, setSelected] = useState<Conversation | null>(null);

  if (selected) {
    return (
      <ConversationPage
        selected={selected as Conversation}
        setSelected={setSelected}
      />
    );
  }

  return <ChatPage setSelected={setSelected} />;
};

export default App;
