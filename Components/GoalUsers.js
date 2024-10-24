import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

export default function GoalUsers() {
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
        // set the users state variable from the data
      } catch (err) {
        console.log("fetch user data ", err);
      }
           
    }
 
    fetchData();
  }, [])

  return (
    <View>
      <Text>GoalUsers</Text>
    </View>
  )
}

const styles = StyleSheet.create({})