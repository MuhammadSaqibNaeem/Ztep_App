/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ForgotPassword, BackIcon, Message, Cross } from "@assets";
import Modal from "react-native-modal";
import React, { FC, useState } from "react";
import { TextInput, PrimaryButton } from "@components";
import styles from "./styles";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
const theme = AppliedTheme();
const LoginScreen: FC = ({ navigation }) => {
  const [email, setEmail] = useState<string | undefined>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={modalVisible} style={styles.modalStyle}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.crossIcon}>
            <Cross />
          </TouchableOpacity>
          <View style={styles.subViewModal}>
            <Text style={styles.subHeadingText}>
              A reset link has been emailed to you. Please also check your spam.
            </Text>
            <Message />
            <View style={styles.buttonView}>
              <PrimaryButton
                title={"Okay"}
                onPress={closeModal}
                width={getWidth(70)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.subContainer}>
        <View style={styles.forgetPaswordIconView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.headingText}>Forgot Password</Text>
        </View>
        <View style={styles.subHeadingView}>
          <Text style={styles.subHeadingText}>
            Not to worry, it happens to the best of us. Please enter your email
            address below.
          </Text>
        </View>
        <ForgotPassword />
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
        </View>

        <View style={styles.buttonView}>
          <PrimaryButton title={"Send Reset Link"} onPress={openModal} />
        </View>
        <TouchableOpacity style={styles.ContinueWithView}>
          <Text style={styles.ContinueWithText}>Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
