import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function PressableButton({
    children, 
    pressedFunction, 
    conponentStyle,
    pressedstyle,
}) {
  return (
    <Pressable 
        onPress={pressedFunction}
        style={({pressed}) => {
            return [componentStyle, pressed & pressedstyle]
        }}
    
    >        
        <View>{children}</View>        
    </Pressable>
  )
}

const styles = StyleSheet.create({})