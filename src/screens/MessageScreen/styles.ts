/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  headerView: {
    width: getWidth(100),
    height: getHeight(10),
    borderBottomWidth: 1,
    borderColor: theme.button.Gray,
  },
  headerSubView: {
    width: getWidth(52),
    height: getHeight(10),
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    left: getWidth(5),
  },
  imageView: {
    borderWidth: 2,
    borderColor: theme.button.secondary,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "center",
    borderColor: theme.buttonText.primary,
    borderWidth: 2,
    borderRadius: 100,
  },
  imageTextView: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: getWidth(40),
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 16,
    color: theme.text.heading,
  },
  bubbleStyle: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: theme.button.Gray,
    backgroundColor: "transparent",
  },
});
export default styles;
