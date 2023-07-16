/** @format */

import React, { FC, useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  Time,
  Message,
  InputToolbar,
  Send,
  Composer,
  Day,
} from "react-native-gifted-chat";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import moment from "moment";
import styles from "./styles";
import {
  BackArrow,
  ChatIcon,
  Mike,
  Gallery,
  Emoji,
  SendMessage,
} from "@assets";
import { PeopleComponent } from "@components";
import { useNavigation } from "@react-navigation/native";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "../../helper";
const theme = AppliedTheme();
const MessageScreen: FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Volutpat lacus pretium enim lacus sit amet at lectus amet.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const renderBubble = (props) => {
    const bubbleStyle = {
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderWidth: 1,
      borderColor: theme.button.Gray,
      backgroundColor: theme.background.primary,
      marginBottom: getHeight(5),
    };

    const textStyle = {
      color: "black",
      fontFamily: "Medium",
      textAlign: "justify",
    };

    const timeTextStyle = {
      textAlign: "left",
      color: theme.text.heading,
    };

    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: bubbleStyle,
          right: bubbleStyle,
        }}
        textStyle={{
          left: textStyle,
          right: textStyle,
        }}
        timeTextStyle={{
          left: timeTextStyle,
          right: timeTextStyle,
        }}

        // renderTime={() => null}
      />
    );
  };
  const renderDay = (props) => {
    const { currentMessage } = props;
    const messageDate = moment(currentMessage.createdAt).format("YYYY-MM-DD");
    const today = moment().format("YYYY-MM-DD");
    const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

    let dayText = "";
    if (messageDate === today) {
      dayText = "Today";
    } else if (messageDate === yesterday) {
      dayText = "Yesterday";
    } else {
      dayText = moment(currentMessage.createdAt).format("MMM D, YYYY"); // Custom format for older dates
    }

    return (
      <Day {...props} textStyle={styles.dayTextStyle}>
        {dayText}
      </Day>
    );
  };

  const CustomInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: theme.background.primary,
          borderTopColor: "gray",
          borderTopWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
        placeholderTextColor="gray"
        renderComposer={(composerProps) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderColor: theme.button.Gray,
              borderWidth: 2,
              borderRadius: 10,
              height: getHeight(7),
              marginLeft: getWidth(6),
              marginRight: getWidth(6),
            }}
          >
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <ChatIcon />
            </TouchableOpacity>
            <Composer
              {...composerProps}
              textInputStyle={{
                color: theme.text.heading,
                fontFamily: "Medium",
              }}
            />
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <Mike />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <Gallery />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <Emoji />
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  const CustomSend = (props) => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: getWidth(10),
          right: 10,
        }}
      >
        <SendMessage />
      </Send>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerSubView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>

          <View style={styles.imageTextView}>
            <View style={styles.imageView}>
              <Image
                source={require("../../../assets/images/download.jpeg")}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View>
              <Text style={styles.textStyle}>Joshua Jones</Text>
              <Text style={[styles.textStyle, { color: theme.text.Green }]}>
                • Online
              </Text>
            </View>
          </View>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderUsername={() => null}
        renderAvatar={() => null}
        renderInputToolbar={CustomInputToolbar}
        renderSend={CustomSend}
        placeholder="Message...."
        renderDay={renderDay}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
