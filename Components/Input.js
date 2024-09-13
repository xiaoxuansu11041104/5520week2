import { Text, View, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';

export default function Input({autoFocus}) {
    const [text, setText] = useState('');
    const textInputRef = useRef(null); // Reference to manage focus
    const [isFocused, setIsFocused] = useState(false); // State to track focus
    const [showMessage, setShowMessage] = useState(false); // State to show message

    // Set focus on the TextInput when the component mounts if autoFocus is true
    useEffect(() => {
    if (autoFocus && textInputRef.current) {
        textInputRef.current.focus(); // Automatically focus the input if autoFocus is true
    }
    }, [autoFocus]);


    function updateText(newText) {
        setText(newText);
    }

    // Function to handle when the input loses focus (onBlur)
    function handleBlur() {
        setIsFocused(false);
        setShowMessage(true); // Show message after blur
    }

    // Function to handle when the input gains focus (onFocus)
    function handleFocus() {
        setIsFocused(true);
        setShowMessage(false); // Hide the message when the input is focused
    }

    // Function to determine the message to display based on input length
    const getMessage = () => {
        if (text.length >= 3) {
            return "Thank you";
        }
        return "Please type more than 3 characters";
    };

  return (
    <View>
        <TextInput
          ref={textInputRef} 
          placeholder="Type something"
          keyboardType="default"
          style={{ borderBottomColor: 'purple', borderBottomWidth: 1, width: 200, marginBottom: 10 }}
          value={text}
          onChangeText={updateText}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />

        {/* Real-time character count */}
        {text.length > 0 && (
            <Text>Character count: {text.length}</Text>
        )}

        {/* Display message when the input loses focus */}
        {showMessage && (
            <Text style={{ color: text.length >= 3 ? 'green' : 'red' }}>
            {getMessage()}
            </Text>
        )}
        
    </View>
  )
}
