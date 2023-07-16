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

const NotificationCom: FC = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../../assets/images/3333.jpeg")}
        style={styles.image}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          <Text style={[styles.textStyle, { color: theme.button.secondary }]}>
            50%{" "}
          </Text>
          off in Zara t-shirt for women get it now and off in Zara t-shirt for
          women get it now
        </Text>
      </View>
    </View>
  );
};
export default NotificationCom;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(90),
    height: getHeight(10),

    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    color: theme.text.heading,
  },
  textView: {
    height: getHeight(6),
    width: getWidth(70),

    justifyContent: "center",
  },
});
