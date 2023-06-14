/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { Apple, Google, Facebook } from "@assets";

import React, { FC, useState } from "react";
import { TextInput, PrimaryButton } from "@components";
import styles from "./styles";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const SignupScreen: FC = ({ navigation }) => {
  const [userName, setUserName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();
  const [showUserName, setShowUserName] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headingText}>Register Account</Text>
        <Text style={styles.subHeadingText}>
          Fill in the following information to confirm registration
        </Text>

        <View style={styles.textInputView}>
          <TextInput
            placeholder="User Name"
            value={userName}
            onChangeText={(value) => {
              setUserName(value);
            }}
            leftIcon="UserIcon"
          />
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
            placeholder="Country"
            value={country}
            onChangeText={(value) => {
              setCountry(value);
            }}
            keyboardType="email-address"
            leftIcon="Country"
          />
          <TextInput
            placeholder="Gender"
            value={country}
            onChangeText={(value) => {
              setCountry(value);
            }}
            leftIcon="Gender"
            rightIcon="DownIcon"
          />
          <TextInput
            placeholder="Age"
            value={country}
            onChangeText={(value) => {
              setCountry(value);
            }}
            leftIcon="Date"
            keyboardType="phone-pad"
            rightIcon="DownIcon"
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

          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(value) => {
              setConfirmPassword(value);
            }}
            leftIcon="Lock"
            rightIcon={showPassword ? "Eye" : "CloseEye"}
            onPress={() => setShowPassword(!showPassword)}
            secureTextEntry={showPassword}
          />
        </View>

        <View style={styles.buttonView}>
          <PrimaryButton title={"Sign Up"} />
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
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={[
                styles.ContinueWithText,
                { color: theme.text.primary, fontFamily: "Medium" },
              ]}
            >
              {" "}
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignupScreen;
