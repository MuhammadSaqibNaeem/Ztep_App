/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet } from "react-native";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textStyle: {
    fontFamily: "Bold",
    fontSize: 25,
    color: theme.text.heading,
  },
  headerView: {
    width: getWidth(60),
    height: getHeight(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // marginTop: getHeight(3),
    marginHorizontal: getWidth(3),
  },
  image: {
    width: getWidth(100),
    height: getHeight(80),
    resizeMode: "cover",
    marginTop: getHeight(2),
  },
  subHeadingView: {
    alignSelf: "center",
    width: getWidth(80),
  },
  subHeadingText: {
    textAlign: "center",
    fontFamily: "Regular",
  },
  imageStyle: {
    width: getWidth(30),
    height: getHeight(30),
  },
  imageView: {
    width: getWidth(30),
    height: getHeight(35),
    marginRight: 20,
  },
  flashListView: {
    height: getHeight(35),
    marginTop: getHeight(3),
  },
  imageTextStyle: {
    height: getHeight(40),
    width: getWidth(95),
    alignSelf: "center",

    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: getHeight(3),
  },
  imageText: {
    width: getWidth(50),
    height: getHeight(40),
  },
  collegeView: {
    flexDirection: "row",
    marginBottom: getHeight(10),
  },
  collegeImage: {
    width: getWidth(80),
    height: getHeight(40),
    marginTop: getHeight(3),
  },
  collegeImage2: {
    width: getWidth(40),
    height: getHeight(30),
  },
  collegeImageView: {
    right: 25,
    position: "absolute",
    width: getWidth(40),
    height: getHeight(35),
    bottom: -70,
  },
});
export default styles;
