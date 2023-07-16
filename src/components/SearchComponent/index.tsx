/** @format */

import React, { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Filter, SearchCom } from "@assets";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
const theme = AppliedTheme();

interface Props {
  value: string;
  onChangeText: string;
}
const SearchComponent: FC<Props> = (props) => {
  const { value, onChangeText } = props;
  return (
    <View style={styles.inputContainer}>
      <SearchCom />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={theme.button.Gray}
      />
      <Filter />
    </View>
  );
};
export default SearchComponent;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.button.Gray,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: getHeight(3),
    paddingHorizontal: 12,
    width: getWidth(90),
    backgroundColor: "#EEEEED",
  },
  input: {
    width: getWidth(60),
    color: "black",
    marginHorizontal: getWidth(5),
    height: getHeight(4),
    fontFamily: "Medium",
  },
});
