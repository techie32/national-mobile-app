import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  CustomerDetail,
  Welcome,
  OTPVerification,
  Deals,
  ProductCheckList,
} from "../pages";

const RootStack = createStackNavigator();
const options = {
  header: () => {
    return null;
  },
  headerShown: false,
};

const screens = [
  { name: "OTPVerification", component: OTPVerification },
  { name: "ProductCheckList", component: ProductCheckList },
  { name: "Deals", component: Deals },
  { name: "CustomerDetail", component: CustomerDetail },
  { name: "Welcome", component: Welcome },
  { name: "Login", component: Login },
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
    <RootStack.Navigator screenOptions={options}>
      {tabnavigatorRender}
    </RootStack.Navigator>
  );
};
export default AppView;
