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
import { Profile, BackArrow, NameLogo } from "@assets";
import { PrimaryButton } from "@components";
import { getHeight, getWidth } from "@helpers";
import { useNavigation } from "@react-navigation/native";

const theme = AppliedTheme();

const ProfileComponent: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/44444.jpeg")}
        style={styles.image}
      />
      <Text style={styles.textStyle}>Black Slim Blazer</Text>
      <View style={styles.ratingMainView}>
        <View style={styles.rateAndRatingView}>
          <Text style={styles.textStyle}>$199</Text>
          <Text style={[styles.textStyle, { color: theme.button.secondary }]}>
            ★★★★☆
          </Text>
        </View>
        <View style={[styles.rateAndRatingView, { width: getWidth(15) }]}>
          <Text style={styles.textStyle}>🖤</Text>
          <Text style={styles.textStyle}>1.3 k</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    width: getWidth(50),
    height: getHeight(36),
    backgroundColor: theme.background.primary,
    borderWidth: 2,
    borderColor: theme.background.primary,
    overflow: "hidden",
  },
  image: {
    width: getWidth(50),
    height: getHeight(30),
    resizeMode: "cover",
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    color: theme.text.heading,
  },
  rateAndRatingView: {
    flexDirection: "row",
    width: getWidth(28),
    justifyContent: "space-between",
  },
  ratingMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(47),
    alignSelf: "center",
    marginTop: getHeight(0.5),
  },
});
export default ProfileComponent;
