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
  mainViewIconText: {
    width: getWidth(100),
    alignSelf: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.button.Gray,
    marginTop: getHeight(3),
  },
  IconTextSettingView: {
    width: getWidth(90),
    alignSelf: "center",
  },
});
export default styles;
