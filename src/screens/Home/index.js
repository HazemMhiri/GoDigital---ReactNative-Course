import React from "react";
import { useWindowDimensions } from "react-native";
import { Layout } from "@ui-kitten/components";

import generateStyles from "./styles";

import GameCard from "../../components/GameCard";
import { data } from "./placeholderData.json";

function Home(props) {
  const windowDimensions = useWindowDimensions();
  const styles = generateStyles(windowDimensions);

  const dataCards = data.map(game => {
    return <GameCard {...game} />;
  });
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="2">
        {dataCards}
      </Layout>
    </Layout>
  );
}

export default Home;
