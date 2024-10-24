import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { writeToDB } from './Firebase/firestireHelper'


export default function GoalUsers({id}) {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );


        if (!response.ok) {
          throw new Error(
            `An HTTP error happened with status: ${response.status}`
          );
        }
        

        const data = await response.json();
        // Write data to firestore using writeToDB function
        data.forEach((user) => writeToDB(user, `goals/${id}/users`));

        // Call the json method on the response to get JSON
        setUsers(
          data.map((user) => {
            return user.name;
          })
        );
        // set the users state variable from the data
      } catch (err) {
        console.log("fetch user data ", err);
      }
           
    }
 
    fetchData();
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})