import { Text, View, TextInput } from 'react-native'
import React, { useState } from 'react';

export default function Input() {
    const [text, setText] = useState('');

    function updateText(ChangeText) {
        setText(ChangeText);
    }
  return (
    <View>
        <TextInput 
          placeholder="Type something"
          keyboardType="default"
          style={{ borderBottomColor: 'purple', borderBottomWidth: 1, width: 200, marginBottom: 10 }}
          value={text}
          onChangeText={updateText}
        />
        
    </View>
  )
}

