/** @format */

import React, { FC, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { HomeStack, AuthStack } from "@navigations";
import { NavigationContainer } from "@react-navigation/native";
import { loadFonts } from "./assets/fonts/index";

import "react-native-gesture-handler";
const App: FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadAppData = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadAppData();
  }, []);

  if (!fontLoaded) {
    return (
      <View>
        <Image
          source={require("./assets/splash.png")}
          style={{ resizeMode: "center", flex: 1 }}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
