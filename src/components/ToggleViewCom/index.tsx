/** @format */

import React, { FC, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import * as svgs from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
interface Props {
  label: string;
  content: React.ReactNode;
  LeftIconName?: keyof typeof svgs;
  RightIconName?: keyof typeof svgs;
  expandedContent?: React.ReactNode;
}

const ToggleViewCom: FC<Props> = (props) => {
  const { label, content, RightIconName, LeftIconName, expandedContent } =
    props;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle} style={styles.header}>
        <View style={styles.mainView}>
          <View style={styles.leftIconStyle}>
            {renderIcon(LeftIconName)}
            <Text style={styles.label}>{label}</Text>
          </View>
          {renderIcon(isExpanded ? "UpArrow" : RightIconName)}
        </View>
      </TouchableOpacity>
      {isExpanded ? (
        <>
          <View style={styles.content}>{content}</View>
        </>
      ) : null}
    </View>
  );
};

const renderIcon = (icon: keyof typeof svgs | undefined) => {
  if (icon && svgs[icon]) {
    const SvgIcon = svgs[icon];
    return <SvgIcon width={25} height={25} />;
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: getWidth(90),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    marginLeft: getWidth(5),
    fontFamily: "Medium",
  },
  content: {
    padding: 10,
    width: getWidth(90),
  },
  mainContent: {
    width: getWidth(100),
    borderBottomColor: theme.button.Gray,
    borderWidth: 0.5,
  },
  leftIconStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ToggleViewCom;
