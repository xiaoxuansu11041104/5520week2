import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import PressableButton from "./PressableButton";
import { setGoalWarning } from "./Firebase/firestireHelper";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWarning] = useState(false);
  async function warningHandler() {
    setWarning(true);
    navigation.setOptions({ title: "Warning!" });
    try {
      if (route.params?.goalObj?.id) {
        await setGoalWarning(route.params.goalObj.id); // Update Firestore with warning: true
        console.log("Firestore updated with warning!");
      } else {
        console.log("Goal ID not available.");
      }
    } catch (error) {
      console.error("Error setting warning in Firestore: ", error);
    }
  }
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // <Button title="Warning" color="white" onPress={warningHandler} />
          <PressableButton
            pressedFunction={warningHandler}
            componentStyle={{ backgroundColor: "purple" }}
          >
            <AntDesign name="warning" size={24} color="white" />
          </PressableButton>
        );
      },
    });
  }, []);
  return (
    <View>
      {route.params ? (
        <Text style={warning && styles.warningStyle}>
          Details of {route.params.goalObj.text} goal with
          {route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More Details</Text>
      )}
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      <GoalUsers />
    </View>
  );
}

const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
});