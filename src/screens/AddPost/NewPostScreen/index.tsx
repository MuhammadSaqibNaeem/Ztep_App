/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import { BackArrow, SSetting } from "@assets";
import { SearchComponent, TextIconCom, PrimaryButton } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getHeight } from "@helpers";

const SettingScreen: FC = ({ route }) => {
  const navigation = useNavigation();
  const image = route.param;
  console.log("bbbbbbbbbbbbbbbbbb", image);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>New Post</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.imageTextView}>
          <Image style={styles.mediaPreview} source={{ uri: image }} />
          <TextInput
            placeholder="Write a caption"
            style={styles.textInputStyle}
            multiline
          />
        </View>
      </View>
      <View style={styles.searchComponentView}>
        <SearchComponent />
      </View>
      <View style={styles.belowView}>
        <TextIconCom title={"Tag People"} />
      </View>
      <View style={styles.belowView}>
        <TextIconCom title={"Category"} />
      </View>
      <View style={styles.belowView}>
        <TextIconCom title={"Add Location"} />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton title={"Post"} height={getHeight(6)} />
      </View>
    </SafeAreaView>
  );
};
export default SettingScreen;
