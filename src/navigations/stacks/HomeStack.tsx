/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  PeopleScreen,
  MessageScreen,
  CollectionDetails,
  PreviousViewedScreen,
  WishlistAndYourOrderScreen,
  NotificationMessageScreen,
  SettingScreen,
  AddToCartScreen,
} from "@screens";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WishlistAndYourOrderScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      <Stack.Screen name="PeopleScreen" component={PeopleScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="CollectionDetails" component={CollectionDetails} />
      <Stack.Screen
        name="PreviousViewedScreen"
        component={PreviousViewedScreen}
      />
      <Stack.Screen
        name="WishlistAndYourOrderScreen"
        component={WishlistAndYourOrderScreen}
      />
      <Stack.Screen
        name="NotificationMessageScreen"
        component={NotificationMessageScreen}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />

      <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
