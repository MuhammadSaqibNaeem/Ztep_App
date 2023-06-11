/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";

import styles from "./styles";
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Home Screen</Text>
    </View>
  );
};
export default HomeScreen;
