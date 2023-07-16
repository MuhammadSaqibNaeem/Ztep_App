/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack, BottomTab, PaymentStack } from "@navigations";
import {
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

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="PaymentStack" component={PaymentStack} />
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

export default MainStack;
