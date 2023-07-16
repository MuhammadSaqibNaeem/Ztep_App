/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Apple, Google, Facebook } from "@assets";

import React, { FC, useState } from "react";
import { TextInput, PrimaryButton } from "@components";
import styles from "./styles";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const LoginScreen: FC = ({ navigation }) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [showUserName, setShowUserName] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Welcome Back!</Text>
        <Text style={styles.subHeadingText}>
          Fill your details or continue with social media
        </Text>

        <View style={styles.textInputView}>
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
            keyboardType="email-address"
            leftIcon="Mail"
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            leftIcon="Lock"
            rightIcon={showPassword ? "Eye" : "CloseEye"}
            onPress={() => setShowPassword(!showPassword)}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
            style={styles.forgetView}
            onPress={() => navigation.navigate("Forget")}
          >
            <Text style={styles.forgetPasswordText}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <PrimaryButton
            title={"Sign in"}
            onPress={() => navigation.navigate("BottomTab")}
          />
        </View>
        <View style={styles.ContinueWithView}>
          <Text style={styles.ContinueWithText}>━ Or Continue with ━</Text>
        </View>
        <View style={styles.SocialButton}>
          <TouchableOpacity>
            <Google />
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook />
          </TouchableOpacity>
          {Platform.OS === "ios" && (
            <TouchableOpacity>
              <Apple />
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.ContinueWithView, { flexDirection: "row" }]}>
          <Text style={styles.ContinueWithText}>New User?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={[
                styles.ContinueWithText,
                { color: theme.text.primary, fontFamily: "Medium" },
              ]}
            >
              {" "}
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
