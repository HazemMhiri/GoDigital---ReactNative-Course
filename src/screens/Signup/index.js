import React from "react";
import { Input, Icon, Button } from "@ui-kitten/components";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import auth from "@react-native-firebase/auth";

import getStyles from "./styles";

export default function Signup(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [securePasswordTxtEntry, setSecurePasswordTxtEntry] = React.useState(
    true
  );

  const styles = getStyles();

  const submitSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(`[error] ${error.code} - ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input
        label="Email"
        placeholder="you@email.com"
        value={email}
        onChangeText={val => setEmail(val)}
        style={styles.input}
      />
      <Input
        label="Password"
        placeholder="********"
        value={password}
        secureTextEntry={securePasswordTxtEntry}
        onChangeText={val => setPassword(val)}
        style={styles.input}
        accessoryRight={iconProps => (
          <TouchableWithoutFeedback
            onPressOut={() =>
              setSecurePasswordTxtEntry(!securePasswordTxtEntry)
            }
          >
            <Icon
              {...iconProps}
              name={securePasswordTxtEntry ? "eye" : "eye-off"}
            />
          </TouchableWithoutFeedback>
        )}
      />
      <Button onPressOut={submitSignUp}>Submit</Button>
    </ScrollView>
  );
}
