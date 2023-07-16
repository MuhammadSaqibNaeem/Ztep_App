/** @format */

import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextInput as InputText,
  TextInputProps,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from "react-native";
import * as svgs from "@assets";

import styles from "./styles";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
interface Props extends TextInputProps {
  name: string;
  placeholder: string;
  width: string;
  rightIcon?: keyof typeof svgs;
  leftIcon?: keyof typeof svgs;
  onPress?: (event: GestureResponderEvent) => void;
}

const theme = AppliedTheme();

const TextInput: FC<Props> = (Props) => {
  const {
    name,
    width,
    placeholder,
    leftIcon,
    rightIcon,
    onPress,
    ...otherProps
  } = Props;

  return (
    <View style={styles.container}>
      <View style={[styles.textField, { width: width ? width : getWidth(90) }]}>
        {leftIcon && <View>{renderIcon(leftIcon)}</View>}
        <InputText
          style={[styles.inputStyle, { width: rightIcon ? "85%" : "100%" }]}
          placeholder={placeholder}
          placeholderTextColor={theme.text.placeholder}
          {...otherProps}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onPress}>
            {renderIcon(rightIcon)}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const renderIcon = (icon: keyof typeof svgs) => {
  const SvgIcon = svgs[icon];
  if (SvgIcon) {
    return <SvgIcon width={20} height={20} />;
  }
  return null;
};

export default TextInput;
