import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
      
      {/* Top section with header and button */}
      <View style={styles.topSection}>
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
      </View>

      {/* Bottom section displaying user input */}
      <View style={styles.bottomSection}>
        <Text style={styles.text}>User input: {userText}</Text>

      </View>

      {/* Pass the modal visibility state and onConfirm callback to Input */}
      <Input 
        visible={modalVisible}
        onConfirm={handleInputData} 
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  topSection: {
    flex: 1,  // 1/5th of the screen
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bottomSection: {
    flex: 4,  // 4/5th of the screen
    backgroundColor: '#D8BFD8',  // Light purple background
    justifyContent: 'center',
    alignItems: 'center',
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
