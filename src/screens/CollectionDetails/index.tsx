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
import React, { FC, useState } from "react";
import { BackArrow } from "@assets";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "../../helper";
import { FlashList } from "@shopify/flash-list";
const DATA = [
  { title: "hh" },
  { title: "hh" },
  { title: "hh" },
  { title: "hh" },
  { title: "hh" },
  { title: "hh" },
];
const CollectionDetails: FC = ({ route }) => {
  const image = route.params;
  console.log("Image=====", image);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Summer Collection</Text>
      </View>
      <ScrollView>
        <Image
          source={require("../../../assets/images/collection.png")}
          style={styles.image}
        />
        <View
          style={[
            styles.headerView,
            {
              alignSelf: "center",
              width: getWidth(90),
              justifyContent: "center",
              marginBottom: getWidth(5),
            },
          ]}
        >
          <Text style={styles.textStyle}>New Collection</Text>
        </View>
        <View style={styles.subHeadingView}>
          <Text style={styles.subHeadingText}>
            Discover new summer collection, this is a collection/editorial
            function that the users can build from widgets, this description max
            150 characters
          </Text>
        </View>
        <View style={styles.flashListView}>
          <FlashList
            data={DATA}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.imageView}>
                <Image
                  source={require("../../../assets/images/collectionimg2.png")}
                  style={styles.imageStyle}
                />
                <Text style={[styles.subHeadingText, { textAlign: "justify" }]}>
                  RESORT LINEN SHIRT SAND
                </Text>
              </View>
            )}
            estimatedItemSize={8000}
          />
        </View>
        <View style={styles.imageTextStyle}>
          <Image
            source={require("../../../assets/images/collectionimg2.png")}
            style={styles.imageText}
          />
          <Text
            style={[
              styles.subHeadingText,
              { textAlign: "center", width: getWidth(40) },
            ]}
          >
            Discover new summer collection, this is a collection/editorial
            function that the users can build from widgets, this description max
            150 characters
          </Text>
        </View>
        <View
          style={[
            styles.headerView,
            {
              alignSelf: "center",
              width: getWidth(90),
              justifyContent: "center",
              marginBottom: getWidth(5),
              marginTop: getHeight(3),
            },
          ]}
        >
          <Text
            style={[
              styles.textStyle,
              { textAlign: "center", fontFamily: "Medium" },
            ]}
          >
            New fashion is coming with style of summer 2023
          </Text>
        </View>
        <View style={styles.imageTextStyle}>
          <Image
            source={require("../../../assets/images/collectionimg2.png")}
            style={styles.imageText}
          />
          <Image
            source={require("../../../assets/images/collectionimg2.png")}
            style={styles.imageText}
          />
        </View>
        <Image
          source={require("../../../assets/images/collectionimg2.png")}
          style={[styles.image, { marginTop: getHeight(3) }]}
        />
        <View style={styles.collegeView}>
          <Image
            source={require("../../../assets/images/collectionimg2.png")}
            style={styles.collegeImage}
          />
          <View style={[styles.collegeImageView]}>
            <Image
              source={require("../../../assets/images/collectionimg2.png")}
              style={styles.collegeImage2}
            />
            <Text style={[styles.subHeadingText, { textAlign: "justify" }]}>
              RESORT LINEN SHIRT SAND
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CollectionDetails;
