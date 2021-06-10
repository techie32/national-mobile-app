import React from "react";
import style from "./style";
import { Image, View, Modal, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";
import { Button } from "..";
import { colors } from "../../assets/colors";

export const SignOut = ({
  visible,
  navigation,
  handleAnotherRes,
  handleLogout,
}) => {
  //   const handleLogout = () => {
  //     navigation.navigate("Login");
  //   };

  //   const handleAnotherRes = () => {
  //     navigation.navigate("CustomerDetail");
  //   };
  return (
    <View style={style.logoContainer}>
      <Modal animationType="fade" visible={visible}>
        <View style={style.overlay}>
          <View style={style.modalHeader}>
            <Image
              source={require("../../assets/images/smile.png")}
              style={style.modalImage}
              resizeMode="contain"
            />
          </View>
          <View style={style.content}>
            <Text style={style.text}>
              Your data has been successfully submitted
            </Text>
            <Button
              label="Submit another response "
              containerStyles={style.resBtn}
              onPress={handleAnotherRes}
            />
            <Button
              label="Logout"
              containerStyles={style.logout}
              onPress={handleLogout}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
