import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ProfileScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default ProfileScreen