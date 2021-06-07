import React, { useState, useEffect } from "react";
import style from "./style";
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import { widthPercentageToDP as wp } from "../../utils/responsive";

export const Welcome = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate("login"), 1000);
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
