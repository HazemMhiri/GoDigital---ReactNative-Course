import React from "react";
import { Text } from "react-native";

import generateStyles from "./styles";

function CustomText(props) {
  const styles = generateStyles({
      size: props.size || 14
  });

  return <Text style={styles.root}>{props.children}</Text>;
}

export default CustomText;
