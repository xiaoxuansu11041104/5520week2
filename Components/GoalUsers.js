import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

export default function GoalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
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