import React from "react";
// import {
//   Camera as RNVCamera,
//   useCameraDevices,
// } from "react-native-vision-camera";

import getStyles from "./styles";
import { View } from "react-native";
import { Text, Button } from "@ui-kitten/components";

function Camera({gameName, handleExit}) {
    React.useEffect(() => {
        // const cameraAccessPermission = await RNVCamera.requestCameraPermission();
        // console.log("[debug] Camera Permission - ", {cameraAccessPermission});
    }, []);

    return <View>
        <Text>Taking picture for: {gameName}</Text>
        <Button appearance="ghost" onPressOut={handleExit}>Exit camera</Button>
    </View>;
}

export default Camera;
