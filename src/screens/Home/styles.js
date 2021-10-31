import { StyleSheet } from "react-native";

export default function generateStyles(window) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    layout: {
      height: window.height
    }
  });
}
