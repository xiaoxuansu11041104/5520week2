import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalObj, handleDelete, navigation }) {
  return (
    
    <Pressable
      onPress={() => {
        // Navigate to the details page when pressed
        navigation.navigate("Details", { goalObj });
      }}
      android_ripple={{
        color: "red", // Color of the ripple effect
        borderless: false, // Determines if the ripple can extend beyond the bounds
      }}
      style={styles.pressableContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{goalObj.text}</Text>
        <Button
          title="X"
          onPress={() => {
            handleDelete(goalObj.id);
          }}
          color="grey"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "purple",
    fontSize: 35,
    padding: 5,
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  pressableContainer: {
    borderRadius: 5,
  },
});