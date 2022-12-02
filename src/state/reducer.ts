import { isMobile } from "@/utils/utils/ua";
import getFriendId from "@/utils/utils/getFriendId";
import convertMessage from "@/utils/utils/convertMessage";
import getData from "localStorage";
import {
  Action,
  ActionTypes,
  SetUserPayload,
  SetFocusPayload,
  SetGuestPayload,
  SetAvatarPayload,
} from "./action";

export interface Message {
  _id: string;
  type: string;
  content: string;
  from: {
    _id: string;
    username: string;
    avatar: string;
    originUsername: string;
    tag: string;
  };
  loading: boolean;
  percent: number;
  createTime: string;
  deleted: boolean;
}

export interface MessageMap {
  [messageId: string]: Message;
}

export interface GroupMember {
  user: {
    _id: string;
    username: string;
    avatar: string;
  };
  os: string;
  browser: string;
  environment: string;
}

//
export interface Group {
  _id: string;
  name: string;
  avatar: string;
  createTime: string;
  creator: string;
  onlineMembers: GroupMember[];
}

//
export interface Friend {
  _id: string;
  name: string;
  avatar: string;
  createTime: string;
}

//

export interface Linkman extends Group, User {
  type: string;
  unread: string;
  messages: MessageMap;
}

//
export interface LinkmansMap {
  [linkmanId: string]: Linkman;
}

// Users
export interface User {
  _id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}

// Redux store state

export interface State {
  user: {
    _id: string;
    username: string;
    avatar: string;
    tag: string;
    isAdmin: boolean;
  } | null;
  linksmans: LinkmansMap;
  //   focus
  focus: string;
  // connect
  connect: boolean;
  // guests
  guests: GroupMember[];
  // messages
  status: {
    ready: boolean;
    //
    loginRegisterDialogVisible: boolean;
    //
    theme: string;
    //
    primaryColor: string;
    //
    primaryTextColor: string;
    //
    backgroundImage: string;
    //
    aero: boolean;
    //
    soundSwitch: boolean;
    //
    sound: string;
    //
    notificationSwitch: boolean;
    //
    voiceSwitch: boolean;
    //
    selfVoiceSwitch: boolean;
    /**
     *
     * singleColor
     * fixedColor
     * randomColor
     */
    tagColorMode: string;
    //
    sidebarVisible: boolean;
    //
    functionBarAndLinkmanListVisible: boolean;
    //
    enableSearchExpression: boolean;
    //
  };
}

/**
 *
 * @param linkman
 */

function getLinkmansMap(linkmans: Linkman[]) {
  return linkmans.reduce((map: LinkmansMap, linkman) => {
    map[linkman._id] = linkman;
    return map;
  }, {});
}


/**
 * 
 * @param messages
 */