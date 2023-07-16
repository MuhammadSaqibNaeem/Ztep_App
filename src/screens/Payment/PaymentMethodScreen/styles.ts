/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet } from "react-native";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  textStyle: {
    fontFamily: "Bold",
    fontSize: 30,
    color: theme.text.heading,
  },
  headerView: {
    width: getWidth(65),
    height: getHeight(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: getWidth(3),
  },
  flashListStyle: {
    height: getHeight(32),
    width: getWidth(100),
    alignSelf: "center",
  },
  image: {
    width: getWidth(100),
    height: getHeight(30),
    resizeMode: "center",
  },
  textView: {
    width: getWidth(100),
    height: getHeight(8),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonView: {
    alignSelf: "center",
    marginTop: getHeight(2),
  },
});
export default styles;
