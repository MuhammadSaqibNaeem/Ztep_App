/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  wordContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  word: {
    fontSize: 18,
    fontFamily: "Medium",
    color: theme.text.placeholder,
  },
  selectedWord: {
    fontSize: 18,
    fontFamily: "Medium",
  },

  selectedLine: {
    height: 3,
    width: 25,
    backgroundColor: "black",
    borderRadius: 100,
  },
  RenderMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(90),
    marginTop: getHeight(3),
    marginBottom: getHeight(2),
  },
  iconStyle: {
    marginLeft: getWidth(2),
  },
});
export default styles;
