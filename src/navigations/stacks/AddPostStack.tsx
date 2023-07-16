/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AddPostScreen, NewPostScreen } from "@addPost";
const Stack = createStackNavigator();

const AddPostStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddPostScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      {/* <Stack.Screen name="Forget" component={ForgetPassword} /> */}
    </Stack.Navigator>
  );
};

export default AddPostStack;
