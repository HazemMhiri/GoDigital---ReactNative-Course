import { StyleSheet } from "react-native";

export default ({ windowDimensions }) =>
  StyleSheet.create({
    camera: {
      position: "absolute",
      width: windowDimensions.width,
      height: windowDimensions.height
    },
    galleryWrapper: {
      position: "absolute",
      top: windowDimensions.height - 250,
      width: windowDimensions.width
    },
    gallery: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#0005",
      height: 100
    },
    image: {
      width: 160,
      height: 90,
      margin: 5,
      zIndex: 1
    },
    buttons: {
      position: "absolute",
      top: windowDimensions.height - 150,
      width: windowDimensions.width,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }
  });
