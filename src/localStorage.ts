import config from "@/config/client";

import themes from "themes";

/** LocalStorage  */
export enum LocalStorageKey {
  Theme = "theme",
  PrimaryColor = "primaryColor",
  PrimaryTextColor = "primaryTextColor",
  BackgroundImage = "backgroundImage",
  Aero = "aero",
  Sound = "sound",
  SoundSwitch = "soundSwitch",
  NotificationSwitch = "notificationSwitch",
  SelfVoiceSwitch = "selfVoiceSwitch",
  VoiceSwitch = "voiceSwitch",
  TagColorMode = "tagColorMode",
  EnableSearchExpression = "enableSearchExpression",
}

let mainLocalStorage = window.localStorage;

/**
 *
 * @param key
 * @return
 * @param defaultValue
 */

function getTextValue(key: string, defaultValue: string) {
  const value = mainLocalStorage.getItem(key);
  return value === undefined ? defaultValue : value;
}

/**
 *
 *
 * @param key
 * @param defaultValue
 */
function getSwitchValue(key: string, defaultValue: boolean = true) {
  const value = mainLocalStorage.getItem(key);
  return value ? value === "true" : defaultValue;
}

/**
 *
 * LocalStorage
 */

export default function getData() {
  const theme = getTextValue(LocalStorageKey.Theme, config.defaultTheme);
  let themeConfig = {
    primaryColor: "",
    primaryTextColor: "",
    backgroundImage: "",
    aero: false,
  };

  if (theme && themes[theme]) {
    themeConfig = themes[theme];
  } else {
    //@ts-ignore
    themeConfig = {
      //@ts-ignore
      primaryColor: getTextValue(
        LocalStorageKey.PrimaryColor,
        themes[config.defaultTheme]?.primaryColor
      ),
      //@ts-ignore
      primaryTextColor: getTextValue(
        LocalStorageKey.PrimaryTextColor,
        themes[config.defaultTheme]?.primaryTextColor
      ),
      //@ts-ignore
      backgroundImage: getTextValue(
        LocalStorageKey.BackgroundImage,
        themes[config.defaultTheme].backgroundImage
      ),
      aero: getSwitchValue(LocalStorageKey.Aero, false),
    };
  }
  return {
    theme,
    ...themeConfig,
    sound: getTextValue(LocalStorageKey.Sound, config.sound),
    soundSwitch: getSwitchValue(LocalStorageKey.SoundSwitch),
    notificationSwitch: getSwitchValue(LocalStorageKey.NotificationSwitch),
    selfVoiceSwitch: getSwitchValue(LocalStorageKey.SelfVoiceSwitch),
    voiceSwitch: getSwitchValue(LocalStorageKey.VoiceSwitch),
    tagColorMode: getTextValue(
      LocalStorageKey.TagColorMode,
      config.tagColorMode
    ),
    enableSearchExpression: getSwitchValue(
      LocalStorageKey.EnableSearchExpression,
      false
    ),
  };
}
