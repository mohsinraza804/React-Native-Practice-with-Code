import { View, Text } from 'react-native'
import React from 'react'

const NameComponent = () => {
  return (
    <View style={{ margin: 10, padding: 10, alignSelf: 'center', backgroundColor: 'white', borderRadius: 10, width: '90%' }}>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25, color: '#222' }}>
        Mohsin Raza
      </Text>

      <Text style={{ alignSelf: 'center', fontSize: 16, color: 'gray', marginTop: 5 }}>
        React Native Developer
      </Text>
    </View>
  )
}

export default NameComponent