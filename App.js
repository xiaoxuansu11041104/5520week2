import React from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Components/GoalDetails";
import { Button } from "react-native";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { getHeaderOptions } from "./Components/HeaderOptions";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();
const authStack = (
  <>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
  </>
);

const appStack = (
  <>
    <Stack.Screen
          name="Home"
          component={Home}
          options={
            getHeaderOptions("All My Goals")            
          }
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ navigation, route }) => {
            return {
              title: route.params ? route.params.goalData.text : "More Details",
              // headerRight: () => {
              //   return (
              //     <Button
              //       title="Warning"
              //       onPress={() => {
              //         console.log("warning");
              //       }}
              //     />
              //   );
              // },
            };
          }}
        />
  </>
);


export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
      //based on the user variable, set the state variable isUserLoggedIn
    });
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      >     
      </Stack.Navigator>
      {isUserLoggedIn ? appStack : authStack}
    </NavigationContainer>
  );
}