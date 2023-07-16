/** @format */

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FC } from "react";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
import { getHeight, getWidth } from "@helpers";
import { ForwardArrow } from "@assets";
interface Props {
  title: string;
  onPress: void;
}
const PrimaryButton: FC<Props> = (props) => {
  const { title, onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <ForwardArrow />
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: getWidth(90),
    height: getHeight(7),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  textStyle: { fontFamily: "Regular", fontSize: 18, color: theme.text.heading },
});
