import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Student = () => {

  useEffect(() => {

    console.log('Student component mounted')

    return () => {
      console.log('Student component unmounted')
    }

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Yes Student Component is Visible
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 12,
    backgroundColor: 'white',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Student