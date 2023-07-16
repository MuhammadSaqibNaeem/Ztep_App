/** @format */

import React, { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppliedTheme } from "@constants";
import { Profile, BackArrow, NameLogo } from "@assets";
import { PrimaryButton } from "@components";
import { getHeight, getWidth } from "@helpers";
import { useNavigation } from "@react-navigation/native";

const theme = AppliedTheme();

const ProfileComponent: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.PicView}>
        <ImageBackground
          source={require("../../../assets/images/profile.png")}
          style={styles.PicStyle}
        >
          <TouchableOpacity style={styles.backArrowContainer}>
            <BackArrow />
          </TouchableOpacity>
          <View style={styles.nameLogo}>
            <NameLogo />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: theme.text.heading,
                    fontSize: 25,
                    fontFamily: "Bold",
                  },
                ]}
              >
                ZARA
              </Text>
            </View>

            <View style={styles.followerDetailMainView}>
              <View style={styles.followerDetails}>
                <View style={styles.subViewFollowerDetails}>
                  <Text style={styles.textStyle}>1200</Text>
                  <Text style={styles.textStyle}>Posts</Text>
                </View>
                <View style={styles.subViewFollowerDetails}>
                  <Text style={styles.textStyle}>240</Text>
                  <Text style={styles.textStyle}>Products</Text>
                </View>
                <View style={styles.subViewFollowerDetails}>
                  <Text style={styles.textStyle}>22k</Text>
                  <Text style={styles.textStyle}>Followers</Text>
                </View>
              </View>
              <View
                style={[styles.followerDetails, { marginTop: getHeight(2) }]}
              >
                <PrimaryButton
                  width={getWidth(25)}
                  height={getHeight(5)}
                  title={"Follow"}
                  color={theme.buttonText.secondary}
                  backgroundColor={theme.button.secondary}
                  onPress={() => navigation.navigate("PeopleScreen")}
                />
                <PrimaryButton
                  width={getWidth(25)}
                  height={getHeight(5)}
                  title={"Message"}
                  color={theme.buttonText.secondary}
                  backgroundColor={theme.button.Gray}
                  onPress={() => navigation.navigate("MessageScreen")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.textView}>
        <Text
          style={[
            styles.textStyle,
            { color: theme.text.heading, fontSize: 18 },
          ]}
        >
          ZARA
        </Text>
        <Text style={[styles.textStyle, { fontFamily: "Regular" }]}>Brand</Text>
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do
        </Text>
        <View style={styles.followView}>
          <View style={styles.imageView}>
            <Image
              style={[styles.image, styles.secondImage]}
              source={require("../../../assets//images/3333.jpeg")}
            />
            <Image
              style={styles.image}
              source={require("../../../assets//images/44444.jpeg")}
            />
          </View>
          <Text style={styles.textStyle}>
            Followed by{" "}
            <Text style={[styles.textStyle, { fontFamily: "Bold" }]}>Mik</Text>{" "}
            and{" "}
            <Text style={[styles.textStyle, { fontFamily: "Bold" }]}>Lia</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  backArrowContainer: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  PicView: {
    width: getWidth(100),
    height: getHeight(28),
    position: "relative",
  },
  PicStyle: {
    width: getWidth(100),
    height: getHeight(28),
  },
  textView: {
    width: getWidth(90),
    marginTop: getHeight(1),
  },
  textStyle: {
    fontFamily: "Medium",
    fontSize: 14,
    color: theme.text.heading,
    textAlign: "justify",
  },
  nameLogo: {
    marginTop: getHeight(10),
    width: getWidth(90),
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  followerDetails: {
    flexDirection: "row",
    width: getWidth(55),
    justifyContent: "space-between",
  },
  subViewFollowerDetails: {
    alignItems: "center",
  },
  followerDetailMainView: {
    flexDirection: "column",
  },
  textContainer: {
    position: "absolute",
    top: "78%",
    left: "25%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "transparent",
  },
  followView: {
    width: getWidth(56),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    borderColor: theme.background.primary,
    borderWidth: 2,
    borderRadius: 100,
    width: 40,
    height: 40,
    resizeMode: "center",
    position: "relative",
  },
  secondImage: {
    position: "absolute",
    left: 25,
  },
  imageView: {
    flexDirection: "row",
  },
});
export default ProfileComponent;
