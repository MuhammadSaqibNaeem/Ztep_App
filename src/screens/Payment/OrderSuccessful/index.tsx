/** @format */

import React, { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
import { BackArrow } from "@assets";
const theme = AppliedTheme();
const OrderSuccessful: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/images/orderPlaced.png")}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrowStyle}
        >
          <BackArrow />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OrderSuccessful;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: theme.background.primary,
  },
  image: {
    width: getWidth(100),
    height: getHeight(100),
  },
  backArrowStyle: {
    top: 15,
    left: 15,
    width: getWidth(15),
    alignItems: "center",
    height: getHeight(5),
    justifyContent: "center",
    borderRadius: 100,
  },
});
