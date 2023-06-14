/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import { TextInput } from "@components";
import styles from "./styles";
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Home Screen</Text>
      <TextInput placeholder={"Email Address"} />
    </View>
  );
};
export default HomeScreen;
