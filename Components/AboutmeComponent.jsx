import { View, Text } from 'react-native'
import React from 'react'

const AboutMeComponent = () => {
  return (
    <View style={{ margin: 15, padding: 15, backgroundColor: 'white', borderRadius: 10, width: '90%', alignSelf: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, color: '#222' }}>
        About Me
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24, color: 'gray' }}>
        I am a university student and a passionate developer. I am learning React Native to build mobile applications. I enjoy learning new technologies and improving my programming skills.
      </Text>
    </View>
  )
}

export default AboutMeComponent