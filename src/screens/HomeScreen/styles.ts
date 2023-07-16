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
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(90),
    height: getHeight(8),
    alignItems: "flex-end",
    bottom: getHeight(1),
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(38),
    alignItems: "center",
  },
  flashlistContainer: {
    width: getWidth(100),
    height: getHeight(92),
  },
});
export default styles;
