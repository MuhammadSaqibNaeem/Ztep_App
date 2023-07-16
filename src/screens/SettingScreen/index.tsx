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
import { IconTextSettingCom, TextIconCom } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const SettingScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Settings</Text>
      </View>
      <View style={styles.mainViewIconText}>
        <View style={styles.IconTextSettingView}>
          <IconTextSettingCom IconName={"SAccount"} title={"Account"} />
        </View>
        <TextIconCom title={"Edit Profile"} />
        <TextIconCom title={"Change Password"} />
      </View>
      <View style={styles.mainViewIconText}>
        <View style={styles.IconTextSettingView}>
          <IconTextSettingCom IconName={"SBell"} title={"Notification"} />
        </View>

        <TextIconCom title={"Edit Notifications"} />
      </View>
      <View style={styles.mainViewIconText}>
        <View style={styles.IconTextSettingView}>
          <IconTextSettingCom IconName={"SSetting"} title={"Advanced"} />
        </View>

        <TextIconCom title={"Language"} />
        <TextIconCom title={"Country"} />
        <TextIconCom title={"Log Out"} onPress={() => alert("Log Out")} />
      </View>
    </SafeAreaView>
  );
};
export default SettingScreen;
