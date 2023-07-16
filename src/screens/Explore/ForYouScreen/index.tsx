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
import { StoryComponent, AddStoryComponent } from "@components";
import styles from "./styles";
import MasonryList from "@react-native-seoul/masonry-list";
const data = [
  { id: "1", image: require("../../../../assets/images/1111.jpeg") },
  { id: "2", image: require("../../../../assets/images/222.jpeg") },
  { id: "3", image: require("../../../../assets/images/download.jpeg") },
  { id: "4", image: require("../../../../assets/images/download.jpeg") },
  { id: "5", image: require("../../../../assets/images/5555.jpeg") },
  { id: "6", image: require("../../../../assets/images/download.jpeg") },
  { id: "7", image: require("../../../../assets/images/1111.jpeg") },
  { id: "8", image: require("../../../../assets/images/222.jpeg") },
  { id: "9", image: require("../../../../assets/images/3333.jpeg") },
  { id: "10", image: require("../../../../assets/images/44444.jpeg") },
  { id: "11", image: require("../../../../assets/images/5555.jpeg") },
  { id: "12", image: require("../../../../assets/images/download.jpeg") },
];
const handleImagePress = (image) => {
  // Perform an action when an image is pressed
  console.log("Image pressed:", image);
};

const renderImage = ({ item }) => (
  <TouchableOpacity
    style={styles.imageContainer}
    onPress={() => handleImagePress(item)}
  >
    <Image style={styles.image} source={item.image} resizeMode="cover" />
  </TouchableOpacity>
);
const PopularContent: FC = () => {
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={2}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const SaleContent: FC = () => {
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={3}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const NewInContent: FC = () => {
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={2}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const ShirtContent: FC = () => {
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={3}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const TShirtContent: FC = () => {
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={2}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};
const ForYouScreen: FC = () => {
  const [selectedWord, setSelectedWord] = useState<string>("Popular");

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
      case "Popular":
        return <PopularContent />;
      case "Sale":
        return <SaleContent />;
      case "New In":
        return <NewInContent />;
      case "Shirt":
        return <ShirtContent />;
      case "T-shirt":
        return <TShirtContent />;
      default:
        return null;
    }
  }, [selectedWord]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subViews}>
        <AddStoryComponent />
        <StoryComponent />
      </View>
      <View style={styles.RenderMainView}>
        {renderWord("Popular")}
        {renderWord("Sale")}
        {renderWord("New In")}
        {renderWord("Shirt")}
        {renderWord("T-shirt")}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default ForYouScreen;
