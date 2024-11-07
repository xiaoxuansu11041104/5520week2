import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function ImageManager() {

  function takeImageHandler() {
    ImagePicker
  }

  return (
    <View>
      <Text>ImageManager</Text>
    </View>
  )
}

const styles = StyleSheet.create({})