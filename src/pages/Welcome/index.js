import React, { useState, useEffect } from "react";
import style from "./style";
import { Image, View } from "react-native";

export const Welcome = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate("Login"), 1000);
  }, []);

  return (
    <View style={style.container}>
      <Image
        source={require("../../assets/images/activeMedia.png")}
        style={style.logo}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/national.jpeg")}
        style={style.logo}
        resizeMode="cover"
      />
    </View>
  );
};
