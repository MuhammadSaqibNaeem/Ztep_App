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
    textAlign: "center",
  },
  subHeadingView: {
    marginTop: getHeight(3),
    alignSelf: "center",
  },
  subContainer: {
    width: getWidth(92),
    height: getHeight(80),
    marginTop: getHeight(5),
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
  forgetPaswordIconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalStyle: {
    alignSelf: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: getWidth(90),
    height: getHeight(40),
    backgroundColor: theme.background.primary,
    borderRadius: 10,
    justifyContent: "center",
  },

  subViewModal: {
    width: getWidth(85),
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  crossIcon: {
    marginBottom: getHeight(3),
    left: getWidth(3),
  },
});
export default styles;
