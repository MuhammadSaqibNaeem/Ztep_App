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
  TextInput,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import {
  ProfileComponent,
  ProductsCollection,
  ProfileProducts,
  SearchComponent,
} from "@components";
import { Search, Post, Products, Editoral, Filter, SearchCom } from "@assets";
import styles from "./styles";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const PostContent: FC = () => {
  return (
    <View style={styles.container2}>
      <ProfileProducts />
    </View>
  );
};
const ProductsContent: FC = () => {
  return (
    <View style={styles.container2}>
      <ProductsCollection />
    </View>
  );
};
const SearchContent: FC = () => {
  return (
    <View style={styles.container3}>
      <SearchComponent />
    </View>
  );
};
const FollowingScreen: FC = () => {
  const [selectedWord, setSelectedWord] = useState<string>("Search");

  const handleWordSelection = useCallback((word: string) => {
    setSelectedWord(word);
  }, []);

  const renderWord = useCallback(
    (icons: any) => {
      const isSelected = selectedWord === icons.key;
      const lineStyle = isSelected ? styles.selectedLine : null;

      return (
        <TouchableOpacity
          key={icons.key}
          onPress={() => handleWordSelection(icons.key)}
          style={styles.wordContainer}
        >
          {icons.component}
          {lineStyle && <View style={lineStyle} />}
        </TouchableOpacity>
      );
    },
    [handleWordSelection, selectedWord]
  );

  const renderContent = useCallback(() => {
    switch (selectedWord) {
      case "Search":
        return <SearchContent />;
      case "Post":
        return <PostContent />;
      case "Products":
        return <ProductsContent />;
      case "Editoral":
        return <SearchContent />;
      default:
        return null;
    }
  }, [selectedWord]);

  const icons = [
    { key: "Search", component: <Search /> },
    { key: "Post", component: <Post /> },
    { key: "Products", component: <Products /> },
    { key: "Editoral", component: <Editoral /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileComponent />

      <View style={styles.RenderMainView}>
        {icons.map((icon) => renderWord(icon))}
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default FollowingScreen;
