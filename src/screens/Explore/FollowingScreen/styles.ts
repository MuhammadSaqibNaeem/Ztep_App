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
  container2: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  RenderMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: getWidth(90),
    marginTop: getHeight(2),
  },
  wordContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },

  selectedLine: {
    height: 3,
    width: 25,
    backgroundColor: "black",
    marginTop: 5,
    borderRadius: 100,
  },
  container3: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.button.Gray,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: getHeight(3),
    paddingHorizontal: 12,
    width: getWidth(90),
    backgroundColor: "#EEEEED",
  },
  input: {
    width: getWidth(60),
    color: "black",
    marginHorizontal: getWidth(5),
    height: getHeight(4),
    fontFamily: "Medium",
  },
});
export default styles;
