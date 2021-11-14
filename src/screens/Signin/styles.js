import { StyleSheet } from "react-native";

export default function getStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: 15,
    },
    input:{
        marginVertical: 10
    }
  });
}
