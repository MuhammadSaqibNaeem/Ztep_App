/** @format */

import React, { FC, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import InstaStory from "react-native-insta-story";
import { AppliedTheme } from "@constants";
import { getWidth } from "@helpers";
const theme = AppliedTheme();
interface Story {
  story_id: number;
  story_image: string;
  swipeText: string;
  onPress: () => void;
}

interface User {
  user_id: number;
  user_image: string;
  user_name: string;
  stories: Story[];
}

const data: User[] = [
  {
    user_id: 1,
    user_image:
      "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
    user_name: "Ahmet Çağlar Durmuş",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Test User",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Test User",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
    ],
  },
  {
    user_id: 4,
    user_image:
      "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
    user_name: "Muhammad Saqib Naeem",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
    ],
  },
  {
    user_id: 5,
    user_image:
      "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
    user_name: "Danyal",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
    ],
  },
];

const StoryComponent: FC = () => {
  return (
    <View style={styles.container}>
      <InstaStory
        data={data}
        duration={10}
        customSwipeUpComponent={
          <View>
            <Text>Swipe</Text>
          </View>
        }
        unPressedBorderColor={theme.button.secondary}
        avatarImageStyle={{ width: 55, height: 55 }}
        avatarTextStyle={{
          fontFamily: "Medium",
          color: theme.text.heading,
          fontSize: 10,
        }}
      />
    </View>
  );
};
export default StoryComponent;
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: getWidth(78),
  },
});
