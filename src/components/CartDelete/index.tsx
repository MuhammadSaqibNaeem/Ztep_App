/** @format */

import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Right } from "@assets";
import { ColorView } from "@components";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
const theme = AppliedTheme();

const CartDelete: FC = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.Container}>
        <View style={styles.imageTextView}>
          <Image
            source={require("../../../assets/images/3333.jpeg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.textStyle}>ZARA</Text>
            <Text style={styles.textStyle}>Blue T-Shirt</Text>
            <View style={styles.textColorView}>
              <Text style={styles.textStyle}>Size: M </Text>
              <ColorView color="blue" />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Right />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartDelete;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(100),
    height: getHeight(15),
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
    width: getWidth(18),
    height: getHeight(12),
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
    width: getWidth(40),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
