import { Text, View, TextInput, Button, StyleSheet, Modal} from 'react-native'
import React, { useState, useRef, useEffect } from 'react';

export default function Input({autoFocus, onConfirm, visible}) {
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

    // Function to handle button press
    function handleConfirm() {
        if (onConfirm) {
            onConfirm(text); // Call the onConfirm function with the input text
        }
        setText(''); // Clear the input after confirming
    }

    // Function to determine the message to display based on input length
    const getMessage = () => {
        if (text.length >= 3) {
            return "Thank you";
        }
        return "Please type more than 3 characters";
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true} // Use a transparent background to create a modal overlay effect
        >
            <View style={styles.modalContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                ref={textInputRef}
                placeholder="Type something"
                style={styles.input}
                value={text}
                onChangeText={updateText}
                />

                {/* Button to confirm the input */}
                <Button title="Confirm" onPress={handleConfirm} color="blue" />
            </View>
            </View>
        </Modal>
        );
    }
    

    const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
        },
        inputContainer: {
          width: '80%',
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
        },
        input: {
          borderBottomColor: 'purple',
          borderBottomWidth: 1,
          width: '100%',
          marginBottom: 20,
        },
      });


