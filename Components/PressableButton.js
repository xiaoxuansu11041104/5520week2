import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function PressableButton({
    children, 
    pressedFunction, 
    componentStyle,
    pressedstyle,
}) {
  return (
    <Pressable 
        onPress={pressedFunction}
        style={({pressed}) => {
            return [
                styles.defaultStyle, 
                componentStyle, 
                pressed && styles.defaultPressedStyle, 
                pressed && pressedstyle

            ];
        }}
    
    >        
        <View>{children}</View>        
    </Pressable>
  )
}

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: "beige",
    },
    defaultPressedStyle: {
        backgroundColor: "blue",
        opacity: 0.5,
    }


})