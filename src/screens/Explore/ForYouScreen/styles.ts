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
  subViews: {
    flexDirection: "row",
    width: getWidth(90),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.background.primary,
    // overflow: "hidden",
  },
  RenderMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(90),
    marginTop: getHeight(3),
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
    fontSize: 22,
    fontFamily: "Bold",
  },

  selectedLine: {
    height: 3,
    width: 25,
    backgroundColor: "black",
    marginTop: 4,
    borderRadius: 100,
  },

  popularContent: {
    width: getWidth(100),
    height: getHeight(100),
  },
  item: {
    flex: 1,
    height: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  smallItem: {
    flex: 1,
  },
  largeItem: {
    flex: 2,
  },

  //////////////Flatlist///////////
  container2: {
    // backgroundColor: "red",
    padding: 10,
    width: getWidth(100),
    height: getHeight(65),
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  imageContainer: {
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "center",
  },
});
export default styles;
