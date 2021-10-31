import { StyleSheet } from "react-native";

export default function generateStyles({size}) {
    return StyleSheet.create({
        root: {
            fontSize: size // css equivalent font-size
        }
    });
}