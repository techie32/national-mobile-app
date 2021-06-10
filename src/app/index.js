import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  CustomerDetail,
  Welcome,
  OTPVerification,
  Deals,
  ProductCheckList,
  RetailerDetail,
} from "../pages";
import { View } from "react-native";
import { Header, SignOut } from "../common";

const RootStack = createStackNavigator();
const options = {
  header: () => {
    return null;
  },
  headerShown: false,
};

const screens = [
  { name: "Welcome", component: Welcome },
  { name: "RetailerDetail", component: RetailerDetail },
  { name: "CustomerDetail", component: CustomerDetail },
  { name: "Login", component: Login },
  { name: "ProductCheckList", component: ProductCheckList },
  { name: "OTPVerification", component: OTPVerification },
  { name: "Deals", component: Deals },
  { name: "SignOut", component: SignOut },
];

const AppView = () => {
  const tabnavigatorRender = screens.map((item, index) => {
    return (
      <RootStack.Screen
        name={item.name}
        component={item.component}
        key={index}
      />
    );
  });
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <RootStack.Navigator screenOptions={options}>
        {tabnavigatorRender}
      </RootStack.Navigator>
    </View>
  );
};
export default AppView;
