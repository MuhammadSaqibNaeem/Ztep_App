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
import { Airplane } from "@assets";
import { ColorView, PrimaryButton } from "@components";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
const theme = AppliedTheme();

const YourOrdersCom: FC = (props) => {
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
              <Text style={[styles.textStyle, { fontSize: 16 }]}>
                Order Nr: #10019
              </Text>
              <Text style={[styles.textStyle, { fontSize: 15 }]}>$199</Text>
            </View>
            <Text style={styles.textStyle}>ZARA</Text>
            <Text style={styles.textStyle}>Purple Slim Shirt</Text>
            <View style={styles.textColorView}>
              <Text style={styles.textStyle}>Size: 36 </Text>

              <ColorView color="purple" />
            </View>

            <View
              style={[
                styles.ratingPriceView,
                {
                  width: getWidth(50),
                  alignSelf: "flex-end",
                  marginTop: getHeight(1),
                },
              ]}
            >
              <PrimaryButton
                title={"Reorder"}
                height={getHeight(5)}
                width={getWidth(25)}
                color={theme.text.heading}
                backgroundColor={theme.button.Gray}
              />
              <PrimaryButton
                title={"Track"}
                height={getHeight(5)}
                width={getWidth(20)}
                backgroundColor={theme.button.secondary}
                color={theme.text.heading}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default YourOrdersCom;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(100),
    height: getHeight(20),
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
  },
});
