import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import { useState } from "react";
import Input from "./Components/Input";

export default function App() {
  const [receivedData, setReceivedData] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const appName = "My app";
  // Add an array to store the goals
  const [goals, setGoals] = useState([]);
  //update to receive data
  function handleInputData(data) {
    //log the data to console
    console.log("App ", data);
    let newGoals = { text: data, id: Math.random() };
    setGoals((prevGoals)=>{
      return [...prevGoals, newGoals];
    });

    setReceivedData(data);
    setIsModalVisible(false);
  }

  // Callback function to handle cancel
  function handleCancel() {
    // Close the modal after press cancel
    setIsModalVisible(false);

  } 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        <Button
          title="Add a Goal"
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
      </View>
      <Input
        textInputFocus={true}
        inputHandler={handleInputData}
        modalVisible={isModalVisible}
        onCancel={handleCancel}
      />
      <View style={styles.bottomView}>
        <ScrollView contentContainerStyle = {styles.ScrollViewContent}>
        
        {goals.map((goalObj) => {
          return (
            <View key = {goalObj.id} style= {styles.textContainer}>
              <Text style={styles.text}>{goalObj.text}</Text>
            </View>
          );

        })}
      
        </ScrollView>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    marginVertical: 5, 
    padding: 10,  
    fontSize: 20,

  },
  topView: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  bottomView: { flex: 4, backgroundColor: "#dcd", alignItems: "center" },
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 20,
  },
  ScrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});