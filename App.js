import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Components/Home'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackActions.NavigationContainer>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={GoalDetails} />
      </StackActions.NavigationContainer>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({})