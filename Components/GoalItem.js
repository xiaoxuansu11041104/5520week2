import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem() {
  return (
    <View key={item.id} style={styles.textContainer}>
    <Text style={styles.text}>{item.text}</Text>
  </View>
  )
}

const styles = StyleSheet.create({})