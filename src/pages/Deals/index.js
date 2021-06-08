import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ScrollView, View } from "react-native";
import { Header, Deal } from "../../common";

export const Deals = () => {
  const [allDeals, setAllDeals] = useState([{}, {}, {}]);
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Header />
      <Text style={style.heading}> Deal Details </Text>
      <View style={style.allDeals}>
        {allDeals.map(() => (
          <Deal containerStyles={style.deal} />
        ))}
      </View>
    </ScrollView>
  );
};