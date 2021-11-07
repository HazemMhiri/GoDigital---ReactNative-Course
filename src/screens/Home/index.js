import React from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import generateStyles from "./styles";

import GameCard from "../../components/GameCard";
import Camera from "../../components/Camera";
import { data } from "./placeholderData.json";

import TextShowcase from "../TextShowcase";
import ScrollViewShowcase from "../ScrollViewShowcase";

function HomeContent({ navigation }) {
  const windowDimensions = useWindowDimensions();
  const styles = generateStyles(windowDimensions);

  const [takingGamePicture, setTakingGamePicture] = React.useState();

  const dataCards = data.map(game => {
    return (
      <GameCard
        key={game.name}
        {...game}
        handleCamera={gameName => setTakingGamePicture(gameName)}
      />
    );
  });
  return takingGamePicture ? (
    <Camera
      gameName={takingGamePicture}
      handleExit={() => setTakingGamePicture(null)}
    />
  ) : (
    <Layout style={styles.container}>
      <ScrollView>
        <Layout style={styles.layout} level="2">
          {dataCards}
        </Layout>
      </ScrollView>
      <Layout style={styles.navBtnContainer} level="2">
        <Button
          appearance="ghost"
          onPressOut={() => navigation.push("examples-text")}
        >
          See text example
        </Button>
        <Button
          appearance="ghost"
          onPressOut={() => navigation.push("examples-views")}
        >
          See views example
        </Button>
      </Layout>
    </Layout>
  );
}

function Home() {
  const MyNavigator = createNativeStackNavigator();
  return (
    <MyNavigator.Navigator initialRouteName="home-content">
      <MyNavigator.Screen
        name="home-content"
        options={{ title: "My Games", headerShown: false }}
        component={HomeContent}
      />
      <MyNavigator.Screen
        name="examples-text"
        options={{
          title: "Custom Text Showcase",
          headerShown: false
        }}
        component={TextShowcase}
      />
      <MyNavigator.Screen
        name="examples-views"
        options={{ title: "Views Showcase", headerShown: false }}
        component={ScrollViewShowcase}
      />
    </MyNavigator.Navigator>
  );
}

export default Home;
