/** @format */

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC, useState, useRef } from "react";
import { HomeScreenComponent } from "@components";
import { LogoText, Heart, Undo, HMessage } from "@assets";
import styles from "./styles";
import Data from "../../../Data";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { getHeight } from "@helpers";
import { getWidth } from "../../helper";
const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flashListRef = useRef(null);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const itemHeight = getHeight(92); // Replace with the actual height of your item

    const index = Math.round(offsetY / itemHeight);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <LogoText />
        <View style={styles.subView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreviousViewedScreen")}
          >
            <Undo />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WishlistAndYourOrderScreen")}
          >
            <Heart />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationMessageScreen")}
          >
            <HMessage />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flashlistContainer}>
        <FlashList
          ref={flashListRef}
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <HomeScreenComponent Data={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={(data, index) => ({
            length: getHeight(92),
            offset: getHeight(92) * index,
            index,
          })}
          onScroll={handleScroll}
          onMomentumScrollEnd={() => {}}
          scrollEventThrottle={16}
          snapToInterval={getHeight(92)}
          decelerationRate="fast"
          initialScrollIndex={0}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
