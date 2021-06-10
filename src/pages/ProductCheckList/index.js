import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ScrollView, View } from "react-native";
import { Header, Deal, Button } from "../../common";
import CheckBox from "@react-native-community/checkbox";
import { SignOut } from "../../common/SignOut";

export const ProductCheckList = ({ navigation }) => {
  const [openSignoutModal, setOpenSignoutModal] = useState(false);
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

  const handleSubmit = () => {
    setOpenSignoutModal(true);
  };

  const handleLogout = () => {
    setOpenSignoutModal(false);
    navigation.navigate("Login");
  };

  const handleAnotherRes = () => {
    setOpenSignoutModal(false);
    navigation.navigate("CustomerDetail");
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Header />
      <Text style={style.heading}> Product CheckList </Text>

      <View style={style.content}>
        <View>
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
        </View>
        <Button label="Submit" onPress={handleSubmit} />
      </View>
      <SignOut
        visible={openSignoutModal}
        navigation={navigation}
        handleLogout={handleLogout}
        handleAnotherRes={handleAnotherRes}
      />
    </ScrollView>
  );
};
