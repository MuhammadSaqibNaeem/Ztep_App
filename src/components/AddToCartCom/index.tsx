/** @format */

import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Airplane } from "@assets";
import { ColorView, PrimaryButton } from "@components";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import NumericInput from "react-native-numeric-input";
const theme = AppliedTheme();
interface Props {
  onChange: (value: number) => void;
  value: number;
  initValue: number;
  onLimitReached: (isMax: boolean, value: number) => void;
  onPress?: void;
}
const AddToCartCom: FC<Props> = (props) => {
  const { onChange, value, onLimitReached, onPress, initValue } = props;

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.Container}>
        <View style={styles.imageTextView}>
          <Image
            source={require("../../../assets/images/222.jpeg")}
            style={styles.image}
          />
          <View>
            <View style={styles.ratingPriceView}>
              <Text style={[styles.textStyle, { fontSize: 15 }]}>ZARA</Text>
              <Text style={[styles.textStyle, { fontSize: 15 }]}>$199</Text>
            </View>
            <Text style={styles.textStyle}>Purple Slim Shirt</Text>
            <View style={styles.textColorView}>
              <Text style={styles.textStyle}>Size: 36 </Text>

              <ColorView color="purple" />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: theme.button.secondary, fontSize: 20 },
              ]}
            >
              ★★★★☆
            </Text>

            <Text style={[styles.textStyle, { fontSize: 10 }]}>
              71,336 ratings
            </Text>

            <View style={styles.ratingPriceView}>
              <NumericInput
                initValue={initValue}
                rounded
                type="plus-minus"
                minValue={0}
                validateOnBlur
                maxValue={10}
                rightButtonBackgroundColor={theme.textInputBG.primary}
                leftButtonBackgroundColor={theme.textInputBG.primary}
                totalWidth={getWidth(28)}
                totalHeight={getHeight(5)}
                onChange={onChange}
                value={value}
                onLimitReached={onLimitReached}
              />
              <PrimaryButton
                title={"Place Order"}
                height={getHeight(5)}
                width={getWidth(30)}
                backgroundColor={theme.button.secondary}
                onPress={onPress}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iconTextView}>
        <Airplane />
        <Text style={[styles.textStyle, { fontSize: 10 }]}>2 days, 2/8/23</Text>
      </View>
    </View>
  );
};
export default AddToCartCom;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(100),
    height: getHeight(22),
    marginTop: getHeight(3),
    borderBottomWidth: 1,
    borderBottomColor: theme.button.Gray,
  },
  Container: {
    width: getWidth(90),
    height: getHeight(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  image: {
    width: getWidth(28),
    height: getHeight(20),
    borderRadius: 10,
    resizeMode: "center",
  },
  textColorView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 12,
    color: theme.text.heading,
    lineHeight: 20,
  },
  imageTextView: {
    width: getWidth(90),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingPriceView: {
    flexDirection: "row",
    width: getWidth(60),
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconTextView: {
    flexDirection: "row",

    top: getHeight(3),
    width: getWidth(90),
    alignSelf: "center",
    alignItems: "center",

    justifyContent: "flex-end",
  },
});
