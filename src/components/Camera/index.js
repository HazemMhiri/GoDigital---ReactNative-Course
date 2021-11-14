import React from "react";
import {
  Camera as RNVCamera,
  useCameraDevices
} from "react-native-vision-camera";
import { ScrollView, View, useWindowDimensions, Image } from "react-native";
import { Text, Button } from "@ui-kitten/components";

import getStyles from "./styles";

function Camera({ gameName, handleExit }) {
  const cameraRef = React.useRef();
  const cameraDevices = useCameraDevices();

  const [mainDevice, setMainDevice] = React.useState();
  const [pictures, setPictures] = React.useState([]);
  const windowDimensions = useWindowDimensions();

  const styles = getStyles({ windowDimensions });

  React.useEffect(() => {
    (async () => {
      const cameraAccessPermission = await RNVCamera.requestCameraPermission();
      if (cameraAccessPermission !== "authorized") handleExit();
    })();
  }, []);

  React.useEffect(() => {
    if (cameraDevices) setMainDevice(cameraDevices.back);
  }, [cameraDevices]);

  const handleTakePicture = async () => {
    const takenPhoto = await cameraRef.current.takePhoto({
      flash: "on"
    });

    setPictures([...pictures, takenPhoto]);
  };

  return (
    <View>
      {mainDevice ? (
        <RNVCamera
          ref={cameraRef}
          device={cameraDevices.back}
          style={styles.camera}
          photo={true}
          isActive={true}
        />
      ) : (
        <Text>Loading Camera Device...</Text>
      )}

      <ScrollView
        horizontal={true}
        style={styles.galleryWrapper}
        contentContainerStyle={styles.gallery}
      >
        {pictures.map(pic => (
          <Image
            source={{
              uri: `file://${pic.path}`,
              width: pic.width,
              height: pic.height
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>

      <View style={styles.buttons}>
        <Button
          status="control"
          appearance="ghost"
          onPressOut={handleTakePicture}
        >
          Take Picture
        </Button>

        <Button status="danger" appearance="ghost" onPressOut={handleExit}>
          Exit camera
        </Button>
      </View>
    </View>
  );
}

export default Camera;
