/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  AddPostScreen,
  ProfileScreen,
} from "@screens";
import { AddPostStack, ExploreStack } from "@navigations";
import { BHome, BSearch, BAddPost, BBag, BProfile } from "@assets";
import { AppliedTheme } from "@constants";
import { getHeight } from "../../helper";
const Tab = createBottomTabNavigator();

const theme = AppliedTheme();
const UserBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Leaderboard"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.button.Gray,
        tabBarInactiveTintColor: "#FFF" + 0,
        tabBarLabel: () => null,
        tabBarStyle: {
          justifyContent: "center",
          height: getHeight(8),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BHome fill={color} width={size} height={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BSearch fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPostStack"
        component={AddPostStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BAddPost fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddToCartScreen"
        component={AddToCartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BBag fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BProfile fill={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTabs;
