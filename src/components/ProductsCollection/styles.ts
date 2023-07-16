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
  RenderMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(90),
    marginTop: getHeight(1),
  },
  wordContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  word: {
    fontSize: 14,
    fontFamily: "Medium",
    color: theme.text.placeholder,
  },
  selectedWord: {
    fontSize: 16,
    fontFamily: "Medium",
  },
  flashListStyle: {
    width: getWidth(100),
    height: getHeight(100),
    marginTop: getHeight(1),
  },
  container2: {
    padding: 10,
    width: getWidth(100),
    height: getHeight(100),
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  imageContainer: {
    margin: 5,
    borderRadius: 1,
  },
  image: {
    width: getWidth(100),
    height: getHeight(40),
  },
});
export default styles;
