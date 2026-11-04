import { View, Text, Button } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SettingsScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default SettingsScreen