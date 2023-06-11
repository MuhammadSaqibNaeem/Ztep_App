/** @format */

import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Bold: require("./Bold.ttf"),
    Medium: require("./Medium.otf"),
    Regular: require("./Regular.otf"),
  });
};
