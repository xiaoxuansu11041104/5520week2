import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';
import React, { useState } from 'react';


export default function App() {

  // Declare a constant variable for the app name
  const appName = "My awesome app";

  // Declare a state variable to store the user input
  const [userText, setUserText] = useState('');

  //  Declare a visible state for the modal
  const [modalVisible, setModalVisible] = useState(false);

  // Callback function to handle the input data from the Input component
  function handleInputData(input) {
    setUserText(input);
    // Hide the modal after confirming
    setModalVisible(false);
  }

  
  return (
    <View style={styles.container}>

      
      <StatusBar style="auto" />
      
      {/* Bordered box with text inside */}
      <View style={styles.textBox}>
        <Text style={styles.headerText}>Welcome to My awesome app</Text>
      </View>
      



      {/* Button to show the modal */}
      <Button 
        title = "Add a goal"
        onPress = {() => setModalVisible(true)}
        color="blue"
      />

      {/* Pass the modal visibility state and onConfirm callback to Input */}
      <Input 
        visible={modalVisible}
        onConfirm={handleInputData} 
      />

      {/* Display the user input */}
      <Text>{userText}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },

  text: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
});
