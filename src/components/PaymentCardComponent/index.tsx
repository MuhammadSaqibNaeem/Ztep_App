/** @format */

import React, { FC, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { CheckBox, Text } from "react-native-elements";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
const theme = AppliedTheme();
interface Props {
  userName: string;
  cardName: string;
  imageSource: string;
}
const PaymentCardComponent: FC<Props> = (props) => {
  const { userName, cardName, imageSource } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageTextMainView}>
        <View style={styles.imageView}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>Finaci</Text>
          <Text style={styles.textStyle}>{userName}</Text>
          <Text style={[styles.textStyle, { fontFamily: "Regular" }]}>
            {cardName}
          </Text>
        </View>
      </View>

      <CheckBox
        checked={isChecked}
        onPress={handlePress}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
        containerStyle={styles.checkboxContainer}
        checkedColor={theme.button.primary}
        uncheckedColor={theme.button.primary}
        size={35}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: getWidth(90),
    alignSelf: "center",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Regular",
    color: theme.text.heading,
  },
  imageView: {
    width: getWidth(44),
    height: getHeight(16),
    backgroundColor: theme.background.primary,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    width: getWidth(38),
    height: getHeight(11.5),
  },
  imageTextMainView: {
    width: getWidth(65),
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    lineHeight: 30,
  },
  textView: {
    width: getWidth(40),
    marginLeft: getWidth(3),
  },
});

export default PaymentCardComponent;
