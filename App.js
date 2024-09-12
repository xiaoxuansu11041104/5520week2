import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';

export default function App() {

  // Declare a constant variable for the app name
  const appName = "My awesome app";
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Header name={appName}>
        <Text>child 1</Text>
        <Text>child 2</Text>

        
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
