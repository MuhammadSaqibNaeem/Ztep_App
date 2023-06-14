/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./styles";

import { getHeight, getWidth } from "@helpers";
interface Props {
  title: string;
  width: string;
  onPress: void;
}
const PrimaryButton: FC<Props> = (props) => {
  const { title, onPress, width } = props;
  return (
    <TouchableOpacity
      style={[styles.container, { width: width ? width : getWidth(90) }]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryButton;
