import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { useSelector } from "react-redux";
import { Login } from "../pages/auth/login";
import { Welcome } from "../pages/welcome";

const RootStack = createStackNavigator();
const options = {
  header: () => {
    return null;
  },
  headerShown: false,
};

const screens = [
  { name: "Welcome", component: Welcome },
  { name: "login", component: Login },
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
