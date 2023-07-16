/** @format */

import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Airplane } from "@assets";
import { ColorView, PrimaryButton } from "@components";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import SwipeButton from "rn-swipe-button";
const theme = AppliedTheme();
interface Props {
  width: string;
  onSwipeSuccess?: void;
}
const SwipeButtonCom: FC<Props> = (props) => {
  const { width, onSwipeSuccess } = props;
  const navigation = useNavigation();
  const CheckoutButton = () => {
    return (
      <View style={styles.buttonView}>
        <Text style={styles.textStyle}>Confirm Order</Text>
      </View>
    );
  };
  return (
    <View style={[styles.container, { width: width ? width : getWidth(96) }]}>
      <SwipeButton
        containerStyles={{ borderRadius: 5, borderWidth: 0, elevation: 5 }}
        height={55}
        railBackgroundColor={theme.textInputBG.primary}
        railFillBackgroundColor={theme.textInputBG.primary}
        railStyles={{
          borderRadius: 5,
          backgroundColor: theme.textInputBG.primary,
          borderWidth: 0,
          elevation: 5,
        }}
        thumbIconComponent={CheckoutButton}
        thumbIconStyles={{
          borderRadius: 5,
          borderWidth: 0,
        }}
        thumbIconWidth={130}
        title="Swipe ➞"
        titleStyles={{
          fontFamily: "Regular",
          color: theme.text.heading,
          width: getWidth(40),
          alignSelf: "flex-end",
          alignContent: "flex-end",
        }}
        thumbIconBackgroundColor={theme.button.secondary}
        onSwipeSuccess={onSwipeSuccess}
      />
    </View>
  );
};
export default SwipeButtonCom;
const styles = StyleSheet.create({
  container: {
    // height: getHeight(20),
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 16,
    color: theme.text.heading,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
