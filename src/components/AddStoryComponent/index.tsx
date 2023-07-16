/** @format */

import React, { FC, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AddIcon, Avatar } from "@assets";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
const theme = AppliedTheme();

const AddStoryComponent: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addStoryView}>
        <View style={styles.avatarContainer}>
          <Avatar width={55} height={55} />
          <View style={styles.addIconContainer}>
            <AddIcon width={20} height={20} />
          </View>
        </View>
      </View>

      <Text style={styles.textStyle}>Your Story</Text>
    </View>
  );
};
export default AddStoryComponent;

const styles = StyleSheet.create({
  container: {
    width: getWidth(18),
    height: getHeight(11),
    alignItems: "center",
  },
  addStoryView: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  textStyle: {
    fontFamily: "Medium",
    color: theme.text.heading,
    fontSize: 10,
    padding: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addIconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: -10,
    left: "27%",
    borderRadius: 50,
    padding: 2,
  },
});
