import React from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Layout, Button, Text, Input } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import generateStyles from "./styles";

import GameCard from "../../components/GameCard";
import Camera from "../../components/Camera";

import TextShowcase from "../TextShowcase";
import ScrollViewShowcase from "../ScrollViewShowcase";

function HomeContent({ navigation }) {
  const [data, setData] = React.useState([]);

  const [name, setName] = React.useState("");
  const [year, setYear] = React.useState("");
  const [developers, setDevelopers] = React.useState("");

  const windowDimensions = useWindowDimensions();
  const styles = generateStyles(windowDimensions);

  const [takingGamePicture, setTakingGamePicture] = React.useState();

  const getGamesDataOnce = async () => {
    try {
      const gamesCollectionRef = firestore().collection("games");
      const gamesCollectionSnapshot = await gamesCollectionRef.get();
      const games = gamesCollectionSnapshot.docs.map(gameDoc => {
        return gameDoc.data();
      });

      setData(games);
    } catch (error) {
      console.error(error);
    }
  };

  const subscribeToGamesData = (onUpdate, onError) => {
    const gamesCollectionRef = firestore().collection("games");
    return gamesCollectionRef.onSnapshot(onUpdate, onError);
  };

  const dataCards = data.map(game => {
    return (
      <GameCard
        key={game.name}
        {...game}
        handleCamera={gameName => setTakingGamePicture(gameName)}
      />
    );
  });

  React.useEffect(() => {
    // getGamesDataOnce(); // gets data only once, NO REAL-TIME UPDATES
    // getting game data with realtime updates

    const unsubscriber = subscribeToGamesData(
      gamesCollectionSnapshot => {
        const games = gamesCollectionSnapshot.docs.map(gameDoc => {
          return gameDoc.data();
        });

        setData(games);
      },
      error => {
        console.error(error);
      }
    );

    return unsubscriber;
  }, []);

  const submitNewGame = async () => {
    try {
      const gamesCollectionRef = firestore().collection("games");
      await gamesCollectionRef.add({
        name,
        developers,
        year: parseInt(year)
      });      
    } catch (error) {
      console.error(error);
    }
  };

  return takingGamePicture ? (
    <Camera
      gameName={takingGamePicture}
      handleExit={() => setTakingGamePicture(null)}
    />
  ) : (
    <Layout style={styles.container}>
      <ScrollView>
        <Layout style={styles.layout} level="2">
          <Text>CREATE - NEW GAME</Text>
          <Input
            label="Name"
            placeholder="mario"
            value={name}
            onChangeText={val => setName(val)}
            style={styles.input}
          />
          <Input
            label="Year"
            placeholder="1987"
            value={year}
            onChangeText={val => setYear(val)}
            style={styles.input}
          />
          <Input
            label="Developers"
            placeholder="Nintendo"
            value={developers}
            onChangeText={val => setDevelopers(val)}
            style={styles.input}
          />
          <Button onPressOut={submitNewGame}>Submit</Button>
        </Layout>
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
