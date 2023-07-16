/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import { ForYouScreen, FollowingScreen } from "@explore";
import styles from "./styles";
import { Search } from "@assets";
const ExploreScreen: FC = ({ navigation }) => {
  const [selectedWord, setSelectedWord] = useState<string>("For You");

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
      case "For You":
        return <ForYouScreen />;
      case "Following":
        return <FollowingScreen />;
      default:
        return null;
    }
  }, [selectedWord]);

  return (
    <View style={styles.container}>
      <View style={styles.RenderMainView}>
        {renderWord("Following")}
        {renderWord("For You")}
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => navigation.navigate("FilterScreen")}
        >
          <Search />
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
};

export default ExploreScreen;
