/** @format */

import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
import { getHeight, getWidth } from "@helpers";
import * as svgs from "@assets";
interface Props {
  title: string;
  IconName?: keyof typeof svgs;
}
const PrimaryButton: FC<Props> = (props) => {
  const { title, IconName } = props;
  return (
    <View style={styles.container}>
      <View>{renderIcon(IconName)}</View>
      <Text style={styles.textStyle}>{title}</Text>
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
export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: { fontFamily: "Bold", fontSize: 25, marginLeft: getWidth(5) },
});
