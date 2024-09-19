import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';
import React, { useState } from 'react';


export default function App() {

  // Declare a constant variable for the app name
  const appName = "My awesome app";

  // Declare a state variable to store the user input
  const [userText, setUserText] = useState('');

  // Callback function to handle the input data from the Input component
  function handleInputData(input) {
    setUserText(input);

  }

  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Header name={appName} />
      
      {/* Pass the 'handleInputData' as the 'onConfirm' prop */}
      <Input onConfirm={handleInputData} />
      {/* Display the user input */}
      <Text>User input: {userText}</Text>
      
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
});
