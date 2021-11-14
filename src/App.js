import React from "react";
import { ApplicationProvider, IconRegistry, Text } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";

import TextShowcase from "./screens/TextShowcase";
import ScrollViewShowcase from "./screens/ScrollViewShowcase";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Settings from "./screens/Settings";
import Signin from "./screens/Signin";

// const MyNavigator = createNativeStackNavigator();
const MyNavigator = createDrawerNavigator();

function App() {
  const [authStateIsInitializing, setAuthStateIsInitializing] = React.useState(
    true
  );
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(loadedUser => {
      setUser(loadedUser);
      if (authStateIsInitializing) setAuthStateIsInitializing(false);
    });

    return unsubscriber;
  }, []);

  const unauthenticatedUserScreens = [
    {
      name: "signin",
      options: { title: "Login", drawerLabel: "Login" },
      component: Signin
    },
    {
      name: "signup",
      options: { title: "New account", drawerLabel: "New account" },
      component: Signup
    }
  ];

  const authenticatedUserScreens = [
    {
      name: "home",
      options: { title: "My Games", drawerLabel: "My Games" },
      component: Home
    },
    {
      name: "examples-text",
      options: {
        title: "Custom Text Showcase",
        drawerLabel: "Custom Text Showcase"
      },
      component: TextShowcase
    },
    {
      name: "examples-views",
      options: { title: "Views Showcase", drawerLabel: "Views Showcase" },
      component: ScrollViewShowcase
    },
    {
      name: "settings",
      options: { title: "Settings", drawerLabel: "Settings" },
      component: Settings
    }
  ];

  const screens = user ? authenticatedUserScreens : unauthenticatedUserScreens;

  return authStateIsInitializing ? (<Text>Loading user...</Text>) : (
    <MyNavigator.Navigator initialRouteName={screens[0].name}>
      {screens.map(screenProps => (
        <MyNavigator.Screen {...screenProps} key={screenProps.name} />
      ))}
    </MyNavigator.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
