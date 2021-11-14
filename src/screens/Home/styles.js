import { StyleSheet } from "react-native";

export default function generateStyles(window) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    layout: {
      padding: 15
    },
    input: {
      marginVertical:10 
    },
    navBtnContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }
  });
}
