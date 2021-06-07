import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./src/assets/colors";
import AppView from "./src/app";

const MyTheme = {
  colors: {
    primary: colors.activeColor,
    background: colors.background,
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppView />
    </NavigationContainer>
  );
}

export default App;
