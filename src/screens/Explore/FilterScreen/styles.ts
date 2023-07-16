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
    width: getWidth(35),
    height: getHeight(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: getWidth(3),
  },
  ViewStyle: {
    alignSelf: "center",
  },
  colorView: {
    marginBottom: getHeight(2),
  },
  buttonView: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    width: getWidth(90),
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: theme.background.primary,
  },
});
export default styles;
