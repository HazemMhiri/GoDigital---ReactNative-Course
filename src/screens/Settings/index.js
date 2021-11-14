import React from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth";
import { Button } from "@ui-kitten/components";
import getStyles from "./styles";

export default function Settings(props) {
  const styles = getStyles();

  const handleUserLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(`[error] ${error.code} - ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        appearance="outline"
        status="danger"
        onPressOut={handleUserLogout}
      >
        Logout
      </Button>
    </View>
  );
}
