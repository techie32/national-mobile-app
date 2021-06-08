import React from "react";
import style from "./style";
import { Image, View } from "react-native";

export const Header = () => {
  return (
    <View style={style.logoContainer}>
      <Image
        source={require("assets/images/activemedia-small.jpg")}
        style={style.logo}
        resizeMode="contain"
      />
      <Image
        source={require("assets/images/national.jpeg")}
        style={style.logo}
        resizeMode="contain"
      />
    </View>
  );
};
