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
import { BackArrow } from "@assets";
import { YourOrdersCom, WishlistComponent } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const Wishlist: FC = () => {
  return (
    <View style={styles.container2}>
      <WishlistComponent />
    </View>
  );
};
const YourOrders: FC = () => {
  return (
    <View style={styles.container2}>
      <YourOrdersCom />
    </View>
  );
};
const WishlistAndYourOrderScreen: FC = () => {
  const navigation = useNavigation();
  const [selectedWord, setSelectedWord] = useState<string>("Wishlist");

  const handleWordSelection = useCallback((word: string) => {
    setSelectedWord(word);
  }, []);

  const renderWord = useCallback(
    (word: string) => {
      const isSelected = selectedWord === word;
      const wordStyle = isSelected ? styles.selectedWord : styles.word;
      const lineStyle = isSelected ? styles.selectedLine : null;

      return (
        <TouchableOpacity
          key={word}
          onPress={() => handleWordSelection(word)}
          style={styles.wordContainer}
        >
          <Text style={wordStyle}>{word}</Text>
          {lineStyle && <View style={lineStyle} />}
        </TouchableOpacity>
      );
    },
    [handleWordSelection, selectedWord]
  );

  const renderContent = useCallback(() => {
    switch (selectedWord) {
      case "Wishlist":
        return <Wishlist />;
      case "Your Orders":
        return <YourOrders />;
      default:
        return null;
    }
  }, [selectedWord]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <View style={styles.RenderMainView}>
          {renderWord("Wishlist")}
          {renderWord("Your Orders")}
        </View>
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};
export default WishlistAndYourOrderScreen;
