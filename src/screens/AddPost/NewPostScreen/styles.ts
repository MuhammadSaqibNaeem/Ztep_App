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
    fontSize: 25,
    color: theme.text.heading,
  },
  headerView: {
    width: getWidth(32),
    height: getHeight(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: getWidth(3),
  },
  mediaPreview: {
    width: getWidth(28),
    height: getHeight(18),
    borderRadius: 10,
    resizeMode: "contain",
    left: 10,
    elevation: 1,
  },
  imageTextView: {
    backgroundColor: theme.background.primary,
    flexDirection: "row",
    width: getWidth(80),
    height: getHeight(22),
    alignSelf: "center",
    alignItems: "center",
    elevation: 1,
  },
  textInputStyle: {
    width: getWidth(45),
    height: getHeight(18),
    left: 15,
    padding: 5,
    textAlignVertical: "top",
    fontFamily: "Regular",
  },
  mainView: {
    backgroundColor: theme.textInputBG.primary,

    width: getWidth(100),
    height: getHeight(30),
    justifyContent: "center",
  },
  searchComponentView: {
    alignSelf: "center",
  },
  belowView: {
    alignSelf: "center",
    marginTop: getHeight(2),
    width: getWidth(100),
    borderBottomColor: theme.button.Gray,
    borderBottomWidth: 0.5,
  },
  buttonView: {
    alignSelf: "center",
    position: "absolute",
    bottom: 5,
  },
});
export default styles;
