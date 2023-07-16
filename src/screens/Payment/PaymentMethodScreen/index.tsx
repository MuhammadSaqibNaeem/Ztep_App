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
import { PrimaryButton, PaymentCardComponent } from "@components";
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
      <View style={styles.flashListStyle}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.image} />
          )}
          estimatedItemSize={8000}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.textView}>
        <Text style={[styles.textStyle, { fontSize: 20 }]}>
          Choose Primary Payment Method
        </Text>
      </View>
      <View>
        <PaymentCardComponent
          cardName={"Debit Card"}
          userName={"MSN"}
          imageSource={require("../../../../assets/images/card1.png")}
        />
        <PaymentCardComponent
          cardName={"Visa Card"}
          userName={"Noman Manzoor"}
          imageSource={require("../../../../assets/images/card2.png")}
        />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton
          title={"＋  Add Payment Method"}
          width={getWidth(90)}
          onPress={() => navigation.navigate("PaymentDetails")}
        />
      </View>
    </SafeAreaView>
  );
};
export default PaymentMethodScreen;
