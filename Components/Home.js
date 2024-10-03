import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import Header from "./Header";
import { useState } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";


export default function Home({ navigation }) {
  const [receivedData, setReceivedData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const appName = "My app!";
  // update to receive data
  function handleInputData(data) {
    console.log("App.js ", data);
    let newGoal = { text: data, id: Math.random() };
    //make a new obj and store the received data as the obj's text property
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
    // setReceivedData(data);
    setModalVisible(false);
  }
  function dismissModal() {
    setModalVisible(false);
  }
  function handleGoalDelete(deletedId) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goalObj) => {
        return goalObj.id != deletedId;
      });
    });
  }
  function deleteAllGoals() {
    // alert the user to confirm the deletion
    Alert.alert(
      "Delete All Goals",
      "Are you sure you want to delete all goals?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setGoals([]); // empty the goals array
          },
        },
      ]
    );
  }

  const handleDetailsPress = (goal) => {
    // Navigate to GoalDetails and pass the goal object
    navigation.navigate('Details', { goal });
  };

  // Custom separator component
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName}></Header>
        <Button
          title="Add a Goal"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Input
        textInputFocus={true}
        inputHandler={handleInputData}
        isModalVisible={modalVisible}
        dismissModal={dismissModal}
      />
      <View style={styles.bottomView}>
        <FlatList
          contentContainerStyle={styles.scrollViewContainer}
          data={goals}
          renderItem={({ item }) => (
            <GoalItem
              deleteHandler={handleGoalDelete}
              goalObj={item}
              onDetailsPress={handleDetailsPress}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>No goals to show</Text>
          )}
          ListHeaderComponent={() =>
            goals.length > 0 ? (
              <Text style={styles.headerText}>My goals</Text>
            ) : null
          }
          ListFooterComponent={() =>
            goals.length > 0 ? (
              <View style={styles.footerContainer}>
                <Button
                  title="Delete All"
                  onPress={deleteAllGoals}
                />
              </View>
            ) : null
          }
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {goals.map((goalObj) => {
            return (
              <View key={goalObj.id} style={styles.textContainer}>
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
    justifyContent: "center",
  },
  scrollViewContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: '100%',
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: { 
    flex: 4, 
    backgroundColor: "#dcd",
    width: "100%",
  },
  emptyText: {
    fontSize: 18,
    color: "purple",
    marginTop: 20,
    textAlign: "center",
  },
  headerText: {
    fontSize: 18,
    color: "purple",
    marginTop: 20,
    textAlign: "center",
  },
  footerContainer: {
    marginVertical: 20,
    alignItems: "center",
    color: "purple",
  },
  separator: {
    height: 4,
    backgroundColor: "#A9A9A9",
    marginVertical: 30,
  },
});