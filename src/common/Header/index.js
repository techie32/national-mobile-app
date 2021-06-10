import React from "react";
import style from "./style";
import { Image, View } from "react-native";

export const Header = () => {
  return (
    <View style={style.logoContainer}>
      <Image
        source={require("assets/images/activeMedia.png")}
        style={style.logo}
        resizeMode="contain"
      />
      <Image
        source={require("assets/images/national.png")}
        style={style.logo}
        resizeMode="contain"
      />
    </View>
  );
};
