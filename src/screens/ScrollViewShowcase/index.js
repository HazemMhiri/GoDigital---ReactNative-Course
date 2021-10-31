import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions
} from "react-native";
import Orientation from "react-native-orientation-locker";

export default function ScrollViewShowcase() {
  const { height, width } = useWindowDimensions();
  const isPortrait = height > width;

  const styles = getStyles({ height, width, isPortrait });

  React.useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.myView1}></View>
      <View style={styles.myView2}></View>
    </ScrollView>
  );
}

const getStyles = window =>
  StyleSheet.create({
    myView1: {
      backgroundColor: "red",
      width: window.width * 0.8, // 0.8vw
      height: window.height * 0.6 // 0.6vh
    },
    myView2: {
      backgroundColor: !window.isPortrait ? "green" : "blue",
      width: window.width * 0.45, // 0.45vw
      height: window.height // 1vh
    }
  });
