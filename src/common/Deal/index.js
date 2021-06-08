import React from "react";
import style from "./style";
import { View, Text } from "react-native";
import { Button } from "..";

export const Deal = ({ containerStyles }) => {
  return (
    <View style={[style.container, containerStyles && containerStyles]}>
      <Text style={style.dealName}>Deal name</Text>
      <Text style={style.price}> 70 PKR</Text>
      <Text>
        description description description description description description
        description description description
      </Text>
      <Button label="Select" containerStyles={style.btn} />
    </View>
  );
};
