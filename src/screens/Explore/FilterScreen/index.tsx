/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import { BackArrow, SSetting } from "@assets";
import {
  CheckBoxButtonTextCom,
  ToggleViewCom,
  ColorView,
  PrimaryButton,
} from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "../../../helper";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const SettingScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Filter</Text>
      </View>
      <ScrollView>
        <View style={styles.ViewStyle}>
          <ToggleViewCom
            label={"Products"}
            LeftIconName={"FProducts"}
            RightIconName={"BelowArrow"}
            content={
              <View>
                <Text style={styles.textStyle}>Products</Text>
              </View>
            }
          />
        </View>
        <View style={styles.ViewStyle}>
          <ToggleViewCom
            label={"Colors"}
            LeftIconName={"Color"}
            RightIconName={"BelowArrow"}
            content={
              <>
                <View style={styles.colorView}>
                  <ColorView color="red" />
                </View>
                <View style={styles.colorView}>
                  <ColorView color="yellow" />
                </View>
                <View style={styles.colorView}>
                  <ColorView color="orange" />
                </View>
                <View style={styles.colorView}>
                  <ColorView color="blue" />
                </View>
              </>
            }
          />
        </View>
        <View style={styles.ViewStyle}>
          <ToggleViewCom
            label={"Size"}
            LeftIconName={"Size"}
            RightIconName={"BelowArrow"}
            content={
              <View>
                <CheckBoxButtonTextCom label={"XXS"} />
                <CheckBoxButtonTextCom label={"XS"} />
                <CheckBoxButtonTextCom label={"S"} />
                <CheckBoxButtonTextCom label={"M"} />
                <CheckBoxButtonTextCom label={"ML"} />
                <CheckBoxButtonTextCom label={"L"} />
                <CheckBoxButtonTextCom label={"XL"} />
              </View>
            }
          />
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <PrimaryButton
          title={"Remove"}
          width={getWidth(40)}
          height={getHeight(7)}
          backgroundColor={"transparent"}
          color={theme.button.Gray}
          borderColor={theme.button.Gray}
          borderWidth={1}
        />
        <PrimaryButton
          title={"Save"}
          width={getWidth(40)}
          height={getHeight(7)}
        />
      </View>
    </SafeAreaView>
  );
};
export default SettingScreen;
