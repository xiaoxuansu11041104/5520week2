import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { launchCameraAsync } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
  const [response, requestPermission] = ImagePicker.useCameraPermissions();
  async function verifyPermission() {
    try {
      //check if user has given permission return ture
      //else ask for permission 
      if (response.granted) {
        return true;
      }
      
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    } catch (err) {
      console.log("verify permission ", err);
    }
  }
  async function takeImageHandler() {
    try {
      // call verifyPermission and only proceed if it returns true
      const hasPermission = await verifyPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        Alert.alert("You need to give permission for camera");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      console.log(result);
      // read the fist element from assets array, and access its uri
    } catch (err) {
      console.log("take image ", err);
    }
  }
  return (
    <View>
      <Button title="Take An Image" onPress={takeImageHandler} />
      <Image />
    </View>
  );
}

const styles = StyleSheet.create({});