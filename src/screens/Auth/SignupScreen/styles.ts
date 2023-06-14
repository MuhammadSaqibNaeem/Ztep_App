/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  headingText: { fontFamily: "Bold", fontSize: 30, color: theme.text.heading },
  subHeadingText: {
    fontFamily: "Regular",
    fontSize: 22,
    color: theme.text.placeholder,
    fontWeight: "500",
  },
  subContainer: {
    width: getWidth(92),
    height: getHeight(80),
    marginTop: getHeight(10),
  },
  textInputView: {
    alignSelf: "center",
    marginTop: getHeight(3),
  },
  buttonView: {
    alignSelf: "center",
    marginTop: getHeight(2),
  },

  ContinueWithView: {
    marginTop: getHeight(3),
    alignSelf: "center",
  },
  ContinueWithText: {
    fontFamily: "Regular",
    color: theme.text.placeholder,
    fontSize: 16,
  },
  SocialButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: getWidth(60),
    alignSelf: "center",
    marginTop: getHeight(3),
  },
});
export default styles;
