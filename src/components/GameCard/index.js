import React from "react";
import { View } from "react-native";
import { Card, Text } from "@ui-kitten/components";

import generateStyles from "./styles";

function GameCard(props) {
  const styles = generateStyles();

  return (
    <>
      <Card
        style={styles.card}
        header={headerProps => (
          <View {...headerProps}>
            <Text category="h6">{props.name}</Text>
            <Text category="s1">By {props.developers}</Text>
          </View>
        )}
      >
        <Text>Year of production: {props.year}</Text>
      </Card>
    </>
  );
}

export default GameCard;
