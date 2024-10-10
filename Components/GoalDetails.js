import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect }from "react";

export default function GoalDetails({ navigation, route }) {
  // State to hold the warning status
  const [isWarning, setIsWarning] = useState(false);
  console.log(route);
  // Function to handle the button press
  const handleWarningPress = () => {
    setIsWarning(true); // Set warning state to true
    navigation.setOptions({ title: "Warning!" }); // Change the header title to "Warning!"
  };
    // UseEffect to change the header title based on the warning status
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
    <View style={styles.container}>
      {route.params ? (
        <Text style={[styles.text, isWarning && { color: "red" }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        fontSize: 20,
        color: "black", // Default text color
      },
});