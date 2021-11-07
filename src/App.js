import React from "react";
import { View } from "react-native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TextShowcase from "./screens/TextShowcase";
import ScrollViewShowcase from "./screens/ScrollViewShowcase";
import Home from "./screens/Home";

// const MyNavigator = createNativeStackNavigator();
const MyNavigator = createDrawerNavigator();

function App() {
  return (
    <MyNavigator.Navigator initialRouteName="home">
      <MyNavigator.Screen
        name="home"
        options={{ title: "My Games", drawerLabel: "My Games" }}
        component={Home}
      />
      <MyNavigator.Screen
        name="examples-text"
        options={{
          title: "Custom Text Showcase",
          drawerLabel: "Custom Text Showcase"
        }}
        component={TextShowcase}
      />
      <MyNavigator.Screen
        name="examples-views"
        options={{ title: "Views Showcase", drawerLabel: "Views Showcase" }}
        component={ScrollViewShowcase}
      />
    </MyNavigator.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
