/** @format */

import React, { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppliedTheme } from "@constants";

import { PrimaryButton } from "@components";
import { getHeight, getWidth } from "@helpers";

const theme = AppliedTheme();
interface Props {
  title: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  onPress: void;
}
const PeopleComponent: FC<Props> = (props) => {
  const { title, onPress, width, height, backgroundColor, color } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <View style={styles.imageTextView}>
          <Image
            source={require("../../../assets/images/222.jpeg")}
            resizeMode="center"
            style={styles.image}
          />
          <View>
            <Text style={styles.textStyle}>Joshua Jones</Text>
            <Text style={[styles.textStyle, { fontFamily: "Regular" }]}>
              2 mutual friend
            </Text>
          </View>
        </View>
        <PrimaryButton
          title={title}
          width={getWidth(30)}
          height={getHeight(6)}
          backgroundColor={backgroundColor}
          color={color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: getHeight(2),
  },
  image: {
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    color: theme.text.primary,
  },
  subView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: getWidth(90),
    alignItems: "center",
  },
  imageTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: getWidth(45),
    alignItems: "center",
  },
});
export default PeopleComponent;
