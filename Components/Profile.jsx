import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({ name, marks }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Student Profile
      </Text>

      <Text style={styles.text}>
        Name: {name}
      </Text>

      <Text style={styles.text}>
        Marks: {marks}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
  },

  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 17,
    marginVertical: 4,
  },
})

export default Profile