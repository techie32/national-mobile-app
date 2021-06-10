import React from "react";
import style from "./style";
import { Image, View, Text } from "react-native";
import { Button } from "..";
import { widthPercentageToDP } from "../../utils/responsive";
import { Texture, Header } from "..";

export const SignOut = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleAnotherRes = () => {
    navigation.navigate("CustomerDetail");
  };
  return (
    <View style={style.root}>
      <Texture />
      <Header />
      <View style={style.overlay}>
        <View style={style.header}>
          <Image
            source={require("../../assets/images/smile.png")}
            style={style.image}
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
    </View>
  );
};
