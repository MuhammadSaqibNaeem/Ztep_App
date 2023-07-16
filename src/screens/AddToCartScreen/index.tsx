/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useState, useCallback } from "react";
import { BackArrow, Cross } from "@assets";
import { AddToCartCom, SwipeButton, AddCartModalCom } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "@helpers";
import Modal from "react-native-modal";
const PreviousViewedScreen: FC = () => {
  const [itemCount, setItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const updateSubtotal = (count: number) => {
    const price = 199;
    const newSubtotal = count * price;
    setSubtotal(newSubtotal);
  };
  const onLimitReached = (isMax: boolean, value: number) => {
    if (isMax) {
      setCount(value - 1);
    } else {
      setCount(value + 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={modalVisible} style={styles.modalStyle}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.crossIcon}>
            <Cross />
          </TouchableOpacity>
          <AddCartModalCom />
          <SwipeButton
            width={getWidth(90)}
            onSwipeSuccess={() => {
              navigation.navigate("PaymentStack"), { closeModal };
            }}
          />
        </View>
      </Modal>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Cart</Text>
      </View>
      <View style={styles.itemView}>
        <View style={styles.subView}>
          <Text style={styles.text}>{itemCount} item</Text>
          <Text style={styles.text}>{subtotal}$</Text>
        </View>
      </View>
      <View
        style={[
          styles.subView,
          { alignSelf: "center", marginTop: getHeight(2) },
        ]}
      >
        <Text style={[styles.textStyle, { fontSize: 16 }]}>Subtotal</Text>
        <Text style={[styles.textStyle, { fontSize: 16 }]}>${subtotal}</Text>
      </View>
      <View style={styles.cardView}>
        <ScrollView>
          <AddToCartCom
            onChange={(value) => {
              setItemCount(value);
              updateSubtotal(value);
              setCount(value);
            }}
            value={count}
            onLimitReached={onLimitReached}
            initValue={itemCount}
            onPress={openModal}
          />
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <SwipeButton
          onSwipeSuccess={() => navigation.navigate("PaymentStack")}
        />
      </View>
    </SafeAreaView>
  );
};
export default PreviousViewedScreen;
