/** @format */

import React, { FC, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { BackArrow } from "@assets";
import { PeopleComponent } from "@components";
import { useNavigation } from "@react-navigation/native";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const ProfileScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <View style={styles.textBackArrowStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.textStyle}>People</Text>
        </View>
      </View>
      <View style={styles.componentStyle}>
        <PeopleComponent
          title={"Remove"}
          backgroundColor={theme.button.Gray}
          color={theme.buttonText.secondary}
        />
        <Text
          style={[
            styles.textStyle,
            { fontSize: 20, top: 5, fontFamily: "Medium" },
          ]}
        >
          Suggestion
        </Text>
        <PeopleComponent title={"Follow"} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
