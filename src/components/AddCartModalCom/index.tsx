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
import { Airplane, Delete } from "@assets";
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
const AddCartModalCom: FC<Props> = (props) => {
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
            <Text style={[styles.textStyle, { fontSize: 15 }]}>ZARA</Text>

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
              <TouchableOpacity>
                <Delete />
              </TouchableOpacity>
              <Text style={[styles.textStyle, { fontSize: 15, right: 15 }]}>
                $199
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iconTextView}>
        <Airplane />
        <Text style={[styles.textStyle, { fontSize: 10 }]}>
          Wednesday, 12 October
        </Text>
      </View>
    </View>
  );
};
export default AddCartModalCom;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(90),
    height: getHeight(22),
    marginVertical: getHeight(1),
    borderBottomWidth: 1,

    borderBottomColor: theme.button.Gray,
  },
  Container: {
    width: getWidth(85),
    height: getHeight(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    alignContent: "center",
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
    width: getWidth(55),
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconTextView: {
    flexDirection: "row",

    top: getHeight(3),
    width: getWidth(90),
    alignSelf: "center",
    alignItems: "center",
    right: 5,
    justifyContent: "flex-end",
  },
});
