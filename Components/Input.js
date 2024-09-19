import { Alert, Button, Modal, StyleSheet, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";

export default function Input({ textInputFocus, inputHandler, modalVisible }) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  function updateText(changedText) {
    setText(changedText);
  }
  function handleConfirm() {
    // call the callback fn received from App.js
    // pass what user has typed
    inputHandler(text);
    setText('');  // Clear the input after confirming
  }

  function handleCancel() {
    // Show an alert with cancel and ok buttons
    Alert.alert(
      "Confirm Cancel", // Title of the alert
      "Are you sure you want to cancel?", // Message of the alert
      [
        {
          text: "Cancel", // Text for the cancel button
          style: "cancel", // Style for the cancel button
        },
        {
          text: "OK", // Text for the ok button
          onPress: () => {
            setText(''); // Clear the input after confirming
            onCancel(); // Call the onCancel callback passed from App.js
          },
        },
      ]
    );
  }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>

          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png',
            }}
          />
          <Text style={styles.altText}>Target icon from network</Text>

          <Image
            style={styles.image}
            source={require('../assets/2617812.png')}
          />
          <Text style={styles.altText}>Target icon from local</Text>


          <TextInput
            autoFocus={textInputFocus}
            placeholder="Type something"
            keyboardType="default"
            style={styles.input}
            value={text}
            onChangeText={updateText}
            onBlur={() => {
              setBlur(true);
            }}
            onFocus={() => {
              setBlur(false);
            }}
          />  
          {blur ? (
            text.length >= 3 ? (
              <Text>Thank you</Text>
            ) : (
              <Text>Please type more than 3 characters</Text>
            )
          ) : (
            text && <Text>{text.length}</Text>
          )}
          <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
              <Button title="Confirm" onPress={handleConfirm} />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={handleCancel} disabled= {text.length < 3}/>
              
            </View>
            
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for the modal
  },

  contentContainer: {
    width: '60%',
    padding: 20,
    backgroundColor: "white", // Background for the content with rounded corners
    borderRadius: 10,         // Rounded corners
    alignItems: "center",
    justifyContent: "center",
  },

  
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    color: "blue",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },

  buttonContainer: {
    width: "50%",
    marginVertical: 10,
  },

  image: {
    width: 100,
    height: 100,
  },

  altText: {
    marginBottom: 10,
    fontSize: 14,
    color: 'grey',
  },
});