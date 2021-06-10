import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ScrollView, View } from "react-native";
import { Header, Deal, Texture } from "../../common";

export const Deals = ({ navigation }) => {
  const [allDeals, setAllDeals] = useState([{}, {}, {}, {}]);

  const handleSelect = () => {
    navigation.navigate("ProductCheckList");
  };
  return (
    <View>
      <Texture />
      <ScrollView contentContainerStyle={style.container}>
        <Header />
        <Text style={style.heading}> Deal Details </Text>
        <View style={style.allDeals}>
          {allDeals.map(() => (
            <Deal containerStyles={style.deal} handleSelect={handleSelect} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
