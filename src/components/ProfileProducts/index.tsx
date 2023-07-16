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
import { CardComponent } from "@components";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
const PopularContent: FC = () => {
  const DATA = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
  ];
  return (
    <View style={styles.flashListStyle}>
      <FlashList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <CardComponent />}
        estimatedItemSize={8000}
        contentContainerStyle={{ paddingBottom: 500 }}
      />
    </View>
  );
};
const FollowingScreen: FC = () => {
  const [selectedWord, setSelectedWord] = useState<string>("New In");

  const handleWordSelection = useCallback((word: string) => {
    setSelectedWord(word);
  }, []);

  const renderWord = useCallback(
    (word: string) => {
      const isSelected = selectedWord === word;
      const wordStyle = isSelected ? styles.selectedWord : styles.word;
      const lineStyle = isSelected ? styles.selectedLine : null;

      if (word === "Sale") {
        return (
          <TouchableOpacity
            key={word}
            onPress={() => handleWordSelection(word)}
            style={styles.wordContainer}
          >
            <Text style={[wordStyle, { color: "red" }]}>{word}</Text>
            {lineStyle && <View style={lineStyle} />}
          </TouchableOpacity>
        );
      }

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
      case "New In":
        return <PopularContent />;
      case "Sale":
        return <PopularContent />;
      case "Dress":
        return <PopularContent />;
      case "Skirt":
        return <PopularContent />;
      case "Jackets":
        return <PopularContent />;
      default:
        return null;
    }
  }, [selectedWord]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.RenderMainView}>
        {renderWord("New In")}
        {renderWord("Sale")}
        {renderWord("Dress")}
        {renderWord("Skirt")}
        {renderWord("Jackets")}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default FollowingScreen;
