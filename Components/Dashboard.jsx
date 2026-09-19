import {View,  Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Student from './Student'
import Profile from './Profile'

const Dashboard = () => {
  const [name, setName] = useState('Raza')
  const [marks, setMarks] = useState(10)
  const [isStudent, setIsStudent] = useState(true)

  // First render
  useEffect(() => {
    console.log('Only display first rendering')
  }, [])

  // Runs when name changes
  useEffect(() => {
    console.log('Name is changed')
  }, [name])

  // Runs when marks change
  useEffect(() => {
    console.log('Marks updated')
  }, [marks])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Students Dashboard</Text>

      <Text style={styles.label}>Student Name</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(value) => setName(value)}
        style={styles.input}
      />

      <View style={styles.button}>
        <Button
          title="Change Name to Ali"
          onPress={() => setName('Ali')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Increase 10 Marks"
          onPress={() => setMarks(marks + 10)}
        />
      </View>

      <Profile
        name={name}
        marks={marks}
      />

      {isStudent ? <Student /> : null}

      <View style={styles.button}>
        <Button
          title={isStudent ? 'Hide Student' : 'Show Student'}
          onPress={() => setIsStudent(!isStudent)}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black'
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 15,
  },

  button: {
    marginVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
})


export default Dashboard
