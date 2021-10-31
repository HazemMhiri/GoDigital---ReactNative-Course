import React from "react";
import { ScrollView } from "react-native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

// import TextShowcase from "./screens/TextShowcase";
// import ScrollViewShowcase from "./screens/ScrollViewShowcase";
import Home from "./screens/Home";

function App() {
  return (
    <ScrollView>
      {/* <TextShowcase />
      <ScrollViewShowcase /> */}
      <Home />
    </ScrollView>
  );
}

export default function Root() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <App />
    </ApplicationProvider>
  );
}
