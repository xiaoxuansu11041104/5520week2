import { StatusBar } from "expo-status-bar";
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert} from "react-native";
import Header from "./Components/Header";
import { useState } from "react";
import Input from "./Components/Input";
import GoalItem from "./Components/GoalItem";
import { NavigationContainer } from '@react-navigation/native';

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

  function goalDeleteHandler(goalId){ 
    console.log("Goal to be deleted: ", goalId);

  }

  // Function to delete all goals
  function handleDeleteAll() {
    Alert.alert(
      "Delete All Goals",
      "Are you sure you want to delete all goals?",
      [
        {
          text: "No",
          style: "cancel", // No action if the user cancels
        },
        {
          text: "Yes",
          onPress: () => {
            setGoals([]); // Clear all goals
          },
        },
      ]
    );
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
      <FlatList
        contentContainerStyle={styles.ScrollViewContent}
        data={goals} 
        renderItem={({ item }) => {
          return <GoalItem goalObj={item} handleDelete={goalDeleteHandler} />;
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No goals to show</Text>
          </View>
        )}  
        ListHeaderComponent={() => (
          goals.length > 0 ? (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>My Goals</Text>
            </View>
          ) : null
        )}  
        ListFooterComponent={() =>
          goals.length > 0 ? (
            <View style={styles.footerContainer}>
              <Button title="Delete All" onPress={handleDeleteAll} color="red" />
            </View>
          ) : null
        }

        ItemSeparatorComponent={
          <View style={styles.separator} />
        }
      />

        {/* <ScrollView contentContainerStyle = {styles.ScrollViewContent}>        
          {goals.map((goalObj) => {
            return (
              <View key = {goalObj.id} style= {styles.textContainer}>
                <Text style={styles.text}>{goalObj.text}</Text>
              </View>
            );

          })}     
        </ScrollView> */}
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

  topView: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  bottomView: { flex: 4, backgroundColor: "#dcd"},

  ScrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "red",
    fontSize: 20,
  },
  headerContainer: {
    backgroundColor: "purple",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  separator: {
    height: 5,  // Make separator thicker
    backgroundColor: "#888",  // Dark gray color to make it visible
    marginVertical: 10,  // Space between the separator and the items  // Center the separator
  },
});