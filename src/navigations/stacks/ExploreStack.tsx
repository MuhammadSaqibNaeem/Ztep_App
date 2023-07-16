/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FilterScreen,
  ForYouScreen,
  FollowingScreen,
  ExploreScreen,
} from "@explore";
const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExploreScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="ForYouScreen" component={ForYouScreen} />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
