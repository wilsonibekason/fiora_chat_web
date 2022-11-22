type Group = () => {};
type Friend = () => {};
type Message = () => {};
type Linkman = () => {};

export enum ActionTypes {
  //
  SetGuest = "SetGuest",
  //
  SetUser = "SetUser",
  //
  UpdateUserInfo = "UpdateUserInfo",
  //
  SetStatus = "SetStatus",
  //
  Logout = "Logout",
  //
  SetAvatar = "SetAvatar",
  //
  AddLinkman = "AddLinkman",
  //
  RemoveLinkman = "RemoveLinkman",
  //
  SetFocus = "SetFocus",
  //
  SetLinkmansLastMessages = "SetLinkmansLastMessages",
  //
  AddLinkmanHistoryMessage = "AddLinkmanHistoryMessage",
  //
  AddLinkmanMessage = "AddLinkmanMessage",
  //
  SetLinkmanProperty = "SetLinkmanProperty",
  //
  UpdateMessage = "UpdateMessage",
  //
  DeleteMessage = "DeleteMessage",
  //
  Connect = "Connect",
  //
  DisConnect = "DisConnect",
  //
  Disconnect = "Disconnect",
  //
  SendMessage = "SendMessage",
  //
  SendFile = "SendFile",
  //
  SendImage = "SendImage",
  //
  SendAudio = "SendAudio",
  //
  Ready = "Ready",
}

export type SetGuestPayload = Group;

export type SetUserPayload = {
  _id: string;
  username: string;
  tag: string;
  avatar: string;
  group: Group[];
  friends: Friend[];
  isAdmin: boolean;
};

export interface SetStatusPayload {
  key: string;
  value: any;
}

export type SetAvatarPayload = string;

export interface AddLinkmanPayload {
  linkman: Linkman;
}

export type SetFocusPayload = string;

export interface SetLinkmansLastMessagesPayload {
  [linkmanId: string]: {
    messages: Message[];
    unread: number;
  };
}

export interface AddLinkmanHistoryMessagePayload {
  linkmanId: string;
  message: Message[];
}

export interface AddLinkmanMessagePayload {
  linkmanId: string;
  message: Message;
}

export interface SetLinkmanPropertyPayload {
  linkmanId: string;
  key: string;
  value: any;
}

export type RemoveLinkmanPayload = string;

export interface UpdateMessagePayload {
  linkmanId: string;
  messageId: string;
  value: any;
}

export interface DeleteMessagePayload {
  linkmanId: string;
  messageId: string;
  shouldDelete: boolean;
}

export interface Action {
  type: ActionTypes;
  payload:
    | SetUserPayload
    | UpdateMessagePayload
    | DeleteMessagePayload
    | SetStatusPayload
    | SetAvatarPayload
    | SetFocusPayload
    | SetLinkmanPropertyPayload
    | AddLinkmanPayload
    | RemoveLinkmanPayload;
}
