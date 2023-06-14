/** @format */

import { StyleSheet } from "react-native";

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
  
    height: getHeight(8),
    backgroundColor: theme.button.primary,
    borderRadius: 8,
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    color: theme.buttonText.primary,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Medium",
  },
});
export default styles;
