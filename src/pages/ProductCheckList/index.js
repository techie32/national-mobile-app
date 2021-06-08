import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ScrollView, View } from "react-native";
import { Header, Deal } from "../../common";
import CheckBox from "@react-native-community/checkbox";

export const ProductCheckList = () => {
  const [allProducts, setAllProducts] = useState([
    { value: true, description: "description" },
    { value: false, description: "description" },
    { value: true, description: "description" },
    { value: false, description: "description" },
    { value: true, description: "description" },
  ]);

  const handleValueChange = (index, newValue) => {
    setAllProducts((preData) => {
      let previousData = [...preData];
      previousData[index].value = newValue;
      return previousData;
    });
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Header />
      <Text style={style.heading}> Product CheckList </Text>

      <Text style={style.subHeading}>Please Select</Text>
      {allProducts.map((item, index) => (
        <View style={style.product}>
          <CheckBox
            disabled={false}
            value={item.value}
            onValueChange={(newValue) => handleValueChange(index, newValue)}
          />
          <Text style={style.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
