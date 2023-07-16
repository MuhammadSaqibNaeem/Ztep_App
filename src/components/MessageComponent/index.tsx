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
import { useNavigation } from "@react-navigation/native";
const theme = AppliedTheme();

const MessageComponent: FC = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => navigation.navigate("MessageScreen")}
    >
      <View style={styles.imageTextMainView}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/images/3333.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Joshua Jones</Text>
          <Text style={[styles.textStyle, { fontFamily: "Regular" }]}>
            See you soon!
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.textStyle, { fontFamily: "Regular" }]}>
          23 min
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default MessageComponent;
const styles = StyleSheet.create({
  mainContainer: {
    width: getWidth(90),
    height: getHeight(10),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  imageTextMainView: {
    flexDirection: "row",
    width: getWidth(70),
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageView: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.button.secondary,
    justifyContent: "center",

    alignItems: "center",
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    color: theme.text.heading,
  },
  textView: {
    height: getHeight(6),
    width: getWidth(50),
    justifyContent: "center",
  },
});
