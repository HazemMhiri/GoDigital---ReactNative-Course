import React from "react";
import { View } from "react-native";

import CustomText from "../../components/CustomText";

/**
 * Component <Text>
 * replacer for <h1>, <h2>, <h3>,... <p>
 */

export default function TextShowcase() {
  return (
    <View>
      <CustomText size={24}>H1</CustomText>
      <CustomText size={18}>H2</CustomText>
      <CustomText size={14}>H3</CustomText>
      <CustomText size={12}>p</CustomText>
    </View>
  );
}
