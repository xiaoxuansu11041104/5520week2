import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({name, children}) {

  return (
    <View>
      {/* Use the appName prop inside the Text component */}
      <Text>Welcome to {name}!</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})