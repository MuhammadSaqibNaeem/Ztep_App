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
  subView: {
    width: getWidth(90),
    alignSelf: "center",
    marginTop: getHeight(5),
  },
  textStyle: {
    fontFamily: "Bold",
    fontSize: 30,
  },
  textBackArrowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  componentStyle: {
    width: getWidth(90),
    alignSelf: "center",
  },
});
export default styles;
