/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet } from "react-native";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontFamily: "Bold",
    fontSize: 25,
    color: theme.text.heading,
  },
  headerView: {
    height: getHeight(8),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: getWidth(3),
  },
  RenderMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(90),
  },
  wordContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  word: {
    fontSize: 18,
    fontFamily: "Regular",
    color: theme.text.heading,
  },
  selectedWord: {
    fontSize: 22,
    fontFamily: "Medium",
  },

  selectedLine: {
    height: 3,
    width: 25,
    backgroundColor: "black",
    marginTop: 4,
    borderRadius: 100,
  },
  container2: {
    flex: 1,
  },
});
export default styles;
