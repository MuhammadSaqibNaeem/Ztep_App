/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./styles";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
import { getHeight, getWidth } from "@helpers";
interface Props {
  title: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  onPress: void;
  borderWidth: string;
  borderColor: string;
}
const PrimaryButton: FC<Props> = (props) => {
  const {
    title,
    onPress,
    width,
    height,
    backgroundColor,
    color,
    borderWidth,
    borderColor,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth: borderWidth ? borderWidth : null,
          borderColor: borderColor ? borderColor : null,
          width: width ? width : getWidth(90),
          height: height ? height : getHeight(8),
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.button.primary,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.textStyle,
          { color: color ? color : theme.buttonText.primary },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default PrimaryButton;
