/** @format */

import { StyleSheet } from "react-native";

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    width: getWidth(100),
    height: getHeight(92),
  },
  textStyle: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Medium",
  },
  flashListView: {
    height: getHeight(20),
    width: getWidth(92),
    alignSelf: "center",

    marginVertical: 10,
  },
  colorView: {
    width: getWidth(25),
  },
  contentContainer: {
    padding: 16,
    backgroundColor: theme.background.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoSubView: {
    width: getWidth(90),
    height: getHeight(20),

    flexDirection: "row",
  },
  logoView: {
    width: 60,
    height: 60,
    borderWidth: 0.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.button.Gray,
  },
  logoText: {
    fontFamily: "Medium",
    fontSize: 18,
  },
  secondView: {
    width: getWidth(70),
    height: getHeight(20),

    left: getWidth(3),
  },
  firstView: {
    flexDirection: "row",
    width: getWidth(65),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  dateView: {
    width: getWidth(70),
    height: getHeight(6),
    justifyContent: "center",
    alignSelf: "center",
  },
  iconTextView: {
    flexDirection: "row",
  },
  helpfulView: {
    width: getWidth(25),
    height: getHeight(4),
    borderColor: theme.button.Gray,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flashListStyle: {
    width: getWidth(100),
    height: getHeight(80),
  },
  backgroundImage: {
    width: getWidth(100),
    height: getHeight(70),
    resizeMode: "contain",
  },
  dotStyles: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {
    top: 10,
  },
  ////////
  container111: {
    justifyContent: "center",
    alignItems: "center",
  },

  slider: {
    width: "80%",
  },
  textView: {
    width: getWidth(85),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    position: "absolute",
    top: getHeight(20),
    right: getWidth(5),
    height: getHeight(40),
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",

    zIndex: 1,
  },
  bottomTextView: {
    position: "absolute",
    left: getWidth(5),
    top: getHeight(52),
    height: getHeight(10),
    width: getWidth(70),
    zIndex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: "cover",
  },
  imageView: {
    borderWidth: 2,
    width: 43,
    height: 43,
    borderRadius: 100,
    borderColor: theme.button.secondary,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default styles;
