export interface Message {
  type: MESSAGETYPE;
  text?: string;
  delivered: boolean;
  read: boolean;
  sentBy: SENTBYTYPE;
  sentAt: string;
}

export interface MessageData {
  contact: {
    name: string;
  };
  messages: Message[];
}
export enum MESSAGETYPE {
  TEXT = "text",
  PHOTO = "photo",
  AUDIO = "audio",
}

export enum SENTBYTYPE {
  SELF = "self",
  OTHER = "other",
}

export interface Contact {
  name: string;
}

export interface TextMessage {
  message: string;
}

export interface AudioMessage {
  length: string;
}

export interface Conversation {
  name: string;
  type: MessageType;
  text?: TextMessage;
  audio?: AudioMessage;
  lastMessageAt: string;
  delivered: boolean;
  read: boolean;
  id: string;
  img: string;
}
