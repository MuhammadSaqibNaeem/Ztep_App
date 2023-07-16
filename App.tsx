/** @format */

import React, { FC, useEffect, useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { MainStack } from "@mainStack";
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
    <>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#FFD712"
          barStyle={"default"}
        />

        <MainStack />
      </NavigationContainer>
    </>
  );
};

export default App;
