/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OrderSuccessful,
  PaymentMethodScreen,
  PaymentDetails,
} from "@paymentScreens";
const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PaymentMethodScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
      />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      <Stack.Screen name="OrderSuccessful" component={OrderSuccessful} />
    </Stack.Navigator>
  );
};

export default PaymentStack;
