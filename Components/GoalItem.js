import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem({goalObj}) {

  return (
    <View style={styles.textContainer}>
    <Text style={styles.text}>{goalObj.text}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "purple",
        marginVertical: 5, 
        padding: 10,  
        fontSize: 20,
    
      },
      textContainer: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        marginTop: 20,
      },
})