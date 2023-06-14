/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const theme = AppliedTheme();
const styles = StyleSheet.create({
  textField: {
    width: getWidth(90),
    height: getHeight(8),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: theme.textInputBG.primary,
    borderRadius: 8.58,
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Regular",
    color: theme.text.placeholder,
    marginLeft: getWidth(3),
  },
  container: {
    marginVertical: getHeight(1),
  },
  iconStyle: {
    resizeMode: "contain",
    width: getWidth(8),
    // backgroundColor:'red',
    height: getHeight(3),
  },
});
export default styles;
