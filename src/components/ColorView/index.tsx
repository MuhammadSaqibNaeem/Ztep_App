/** @format */

import React, { FC } from "react";
import { View } from "react-native";
interface Props {
  color: string;
}
const ColorView: FC<Props> = (props) => {
  const { color } = props;

  return (
    <View
      style={{
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 100,
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: 13,
          height: 13,
          borderRadius: 100,
        }}
      />
    </View>
  );
};

export default ColorView;
