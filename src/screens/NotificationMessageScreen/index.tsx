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
import {
  NotificationCom,
  SearchComponent,
  MessageComponent,
} from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
const Notification: FC = () => {
  return (
    <View style={styles.container2}>
      <NotificationCom />
    </View>
  );
};
const Message: FC = () => {
  const DATA = [
    { title: "hhh" },
    { title: "hhh" },
    { title: "hhh" },
    { title: "hhh" },
    { title: "hhh" },
  ];
  return (
    <View style={styles.container2}>
      <SearchComponent />
      <View style={styles.flashListView}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <MessageComponent />}
          estimatedItemSize={8000}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const WishlistAndYourOrderScreen: FC = () => {
  const navigation = useNavigation();
  const [selectedWord, setSelectedWord] = useState<string>("Notification");

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
      case "Notification":
        return <Notification />;
      case "Messages":
        return <Message />;
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
          {renderWord("Notification")}
          {renderWord("Messages")}
        </View>
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};
export default WishlistAndYourOrderScreen;
