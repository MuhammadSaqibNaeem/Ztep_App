/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import { BackArrow } from "@assets";
import { PrimaryButton, PaymentCardComponent, TextInput } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { FlashList } from "@shopify/flash-list";
const DATA = [
  {
    Key: 1,
    image: require("../../../../assets/images/card1.png"),
  },
  {
    Key: 2,
    image: require("../../../../assets/images/card2.png"),
  },
];
const theme = AppliedTheme();
const PaymentMethodScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Payment Method</Text>
      </View>
      <View style={styles.textView}>
        <Text style={[styles.textStyle, { fontSize: 20 }]}>Card Details</Text>
      </View>
      <View style={styles.cardView}>
        <TextInput placeholder={"Card Number"} />
        <View style={styles.twoInputView}>
          <TextInput placeholder={"Expiry Date"} width={getWidth(43)} />
          <TextInput placeholder={"CVV"} width={getWidth(43)} />
        </View>
        <TextInput placeholder={"Card Holder"} />
      </View>
      <View style={styles.IconInputView}>
        <TextInput placeholder={"Phone Number"} leftIcon={"Phone"} />
        <TextInput placeholder={"Address"} leftIcon={"Address"} />
        <TextInput placeholder={"Postal Code"} leftIcon={"Dots"} />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton
          title={"Next"}
          width={getWidth(90)}
          onPress={() => navigation.navigate("OrderSuccessful")}
        />
      </View>
    </SafeAreaView>
  );
};
export default PaymentMethodScreen;
