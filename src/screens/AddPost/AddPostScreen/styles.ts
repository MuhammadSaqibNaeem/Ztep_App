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

  camera: {
    flex: 1,
    backgroundColor: "black",
    aspectRatio: 9 / 16,
  },
  bottomBarContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: getHeight(12),
    flexDirection: "row",
    // marginBottom: 50,
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: getWidth(45),
  },
  recordButton: {
    borderWidth: 4,
    borderColor: theme.button.Gray,
    backgroundColor: theme.background.primary,
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 50,
    height: 50,
  },
  galleryButtonImage: {
    width: 50,
    height: 50,
  },
  sideBarContainer: {
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(50),
    alignSelf: "center",
  },
  iconText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sideBarButton: {
    alignItems: "center",
    marginBottom: 25,
  },
});
export default styles;
