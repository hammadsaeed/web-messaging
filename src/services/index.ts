const conversationList = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch("/api/list-conversations.json", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
  });

  if (response.status === 409) {
    throw new Error("Can't get conversation");
  }

  if (!response.ok) {
    let errorMessage = "Invalid Response";

    console.log(response);

    try {
      const errorResponse = await response.json();
      errorMessage = errorResponse.message || errorMessage;
    } catch (e) {
      console.log(e);
      console.error("Error parsing error response as JSON:", e);
    }
    throw new Error(errorMessage);
  }
  const json = await response.json();
  return json;
};

const messages = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch(`/api/list-messages.json`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
    mode: "no-cors",
  });

  if (response.status === 409) {
    throw new Error("Can't get all messages");
  }

  if (!response.ok) {
    let errorMessage = "Invalid Response";

    try {
      const errorResponse = await response.json();
      errorMessage = errorResponse.message || errorMessage;
    } catch (e) {
      console.log(e);
      console.error("Error parsing error response as JSON:", e);
    }
    throw new Error(errorMessage);
  }

  const json = await response.json();
  return json;
};
const Chat = {
  conversationList,
  messages,
};

export default Chat;
