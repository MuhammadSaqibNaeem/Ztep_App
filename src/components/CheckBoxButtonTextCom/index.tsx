/** @format */

import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox, Text } from "react-native-elements";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
const theme = AppliedTheme();
interface Props {
  label: string;
}
const CheckBoxButtonTextCom: FC<Props> = (props) => {
  const { label } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={isChecked}
        onPress={handlePress}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
        containerStyle={styles.checkboxContainer}
        checkedColor={theme.button.secondary}
      />
      <Text style={styles.label}>{label}</Text>
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
  },
  checkboxContainer: {
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Regular",
    color: theme.text.heading,
  },
});

export default CheckBoxButtonTextCom;
