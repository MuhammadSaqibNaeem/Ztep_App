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
    width: getWidth(20),
    height: getHeight(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: getWidth(3),
  },
  itemView: {
    width: getWidth(100),
    height: getHeight(6),
    borderBottomColor: theme.button.Gray,
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(90),
    alignContent: "center",
  },
  text: {
    fontFamily: "Regular",
    fontSize: 14,
    color: theme.text.heading,
  },
  cardView: {
    marginTop: getHeight(3),
    flex: 1,
    marginBottom: getHeight(10),
  },
  bottomView: {
    position: "absolute",
    width: getWidth(100),
    bottom: 0,
    height: getHeight(10),
    borderTopColor: theme.button.Gray,
    borderTopWidth: 0.5,
    backgroundColor: theme.background.primary,
    justifyContent: "center",
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
