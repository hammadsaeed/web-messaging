import { useState, useEffect } from "react";
import "./index.scss";
import Chat from "../../services";
import { Conversation } from "../../types/index.d";
import { MessageList } from "../../components/messageCard";
import { TopBar } from "../../components/topBar";
import { BottomBar } from "../../components/bottomBar";
import { getRandomAvatar } from "../../components/messageCard/constants";
import ShortUniqueId from "short-unique-id";

const SearchBar: React.FC = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search" />
  </div>
);

const FilterTabs: React.FC = () => (
  <div className="filter-tabs">
    <div className="active">All</div>
    <div>Unread</div>
    <div>Favourites</div>
    <div>+</div>
  </div>
);

interface ChatPageProps {
  setSelected: (data: Conversation) => void;
}

// Define the main App component
const ChatPage: React.FC<ChatPageProps> = ({ setSelected }) => {
  const [data, setData] = useState<Conversation[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Chat.conversationList();

        if (result.conversations) {
          setData(
            result.conversations.map((convo: Conversation) => ({
              ...convo,
              img: getRandomAvatar(),
              id: new ShortUniqueId({ length: 10 }),
            }))
          );
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <TopBar />
      <SearchBar />
      <FilterTabs />
      <MessageList conversations={data} setSelected={setSelected} />
      <BottomBar />
    </div>
  );
};

export default ChatPage;
