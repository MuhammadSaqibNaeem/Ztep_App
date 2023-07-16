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
import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: "1", image: require("../../../assets/images/1111.jpeg") },
  { id: "2", image: require("../../../assets/images/222.jpeg") },
  { id: "3", image: require("../../../assets/images/download.jpeg") },
  { id: "4", image: require("../../../assets/images/download.jpeg") },
  { id: "5", image: require("../../../assets/images/5555.jpeg") },
  { id: "6", image: require("../../../assets/images/download.jpeg") },
  { id: "7", image: require("../../../assets/images/1111.jpeg") },
  { id: "8", image: require("../../../assets/images/222.jpeg") },
  { id: "9", image: require("../../../assets/images/3333.jpeg") },
  { id: "10", image: require("../../../assets/images/44444.jpeg") },
  { id: "11", image: require("../../../assets/images/5555.jpeg") },
  { id: "12", image: require("../../../assets/images/download.jpeg") },
];

const AllCollectionsContent: FC = () => {
  const navigation = useNavigation();
  const handleImagePress = (image) => {
    navigation.navigate("CollectionDetails", image);
  };

  const renderImage = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => handleImagePress(item)}
    >
      <Image style={styles.image} source={item.image} resizeMode="cover" />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container2}>
      <MasonryList
        data={data}
        numColumns={1}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};
const ProductsCollection: FC = () => {
  const [selectedWord, setSelectedWord] = useState<string>("All Collections");

  const handleWordSelection = useCallback((word: string) => {
    setSelectedWord(word);
  }, []);

  const renderWord = useCallback(
    (word: string) => {
      const isSelected = selectedWord === word;
      const wordStyle = isSelected ? styles.selectedWord : styles.word;
      const lineStyle = isSelected ? styles.selectedLine : null;

      if (word === "Summer Collection") {
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
      case "All Collections":
        return <AllCollectionsContent />;
      case "Summer Collection":
        return <AllCollectionsContent />;
      case "Jacket Collections":
        return <AllCollectionsContent />;

      default:
        return null;
    }
  }, [selectedWord]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.RenderMainView}>
        {renderWord("All Collections")}
        {renderWord("Summer Collection")}
        {renderWord("Jacket Collections")}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default ProductsCollection;
