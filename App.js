import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import React, { useState } from 'react';

export default function App() {

  // Declare a constant variable for the app name
  const appName = "My awesome app";
  const [text, setText] = useState("");

  function updateText(ChangeText) {
    setText(ChangeText);
  }
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Header name={appName} />
        <TextInput 
          placeholder="Type something"
          keyboardType="default"
          style={{ borderBottomColor: 'purple', borderBottomWidth: 1, width: 200, marginBottom: 10 }}
          value={text}
          onChangeText={updateText}
        />
        <Text>{text}</Text>
        
 
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
