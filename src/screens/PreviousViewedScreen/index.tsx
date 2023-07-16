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
import { CartDelete } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const SwipedCom: FC = () => {
  return (
    <View style={styles.container2}>
      <CartDelete />
    </View>
  );
};

const PreviousViewedScreen: FC = () => {
  const navigation = useNavigation();
  const [selectedWord, setSelectedWord] = useState<string>("Swiped");

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
      case "Swiped":
        return <SwipedCom />;
      case "Liked":
        return <SwipedCom />;
      case "Disliked":
        return <SwipedCom />;

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
        <Text style={styles.textStyle}>Previously Viewed</Text>
      </View>
      <View style={styles.RenderMainView}>
        {renderWord("Swiped")}
        {renderWord("Liked")}
        {renderWord("Disliked")}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};
export default PreviousViewedScreen;
