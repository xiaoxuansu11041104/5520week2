import { Text, View, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';

export default function Input({autoFocus}) {
    const [text, setText] = useState('');
    const textInputRef = useRef(null); // Reference to manage focus

    // Set focus on the TextInput when the component mounts if autoFocus is true
    useEffect(() => {
    if (autoFocus && textInputRef.current) {
        textInputRef.current.focus(); // Automatically focus the input if autoFocus is true
    }
    }, [autoFocus]);


    function updateText(newText) {
        setText(newText);
    }
  return (
    <View>
        <TextInput
          ref={textInputRef} 
          placeholder="Type something"
          keyboardType="default"
          style={{ borderBottomColor: 'purple', borderBottomWidth: 1, width: 200, marginBottom: 10 }}
          value={text}
          onChangeText={updateText}
        />

      {/* Real-time character count */}
      {text.length > 0 && (
        <Text>Character count: {text.length}</Text>
      )}
        
    </View>
  )
}
