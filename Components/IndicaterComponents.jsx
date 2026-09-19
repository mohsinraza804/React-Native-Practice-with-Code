import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const IndicaterComponents = () => {
  return (
    <View style={styles.container}>

      <View style={styles.loaderBox}>

        <ActivityIndicator
          size="large"
          color="#6C63FF"
        />

        <Text style={styles.loadingText}>
          Loading...
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loaderBox: {
    width: 250,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',

    // Shadow for Android
    elevation: 6,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  loadingText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

})

export default IndicaterComponents