import { View, Text } from 'react-native'
import React from 'react'

const ContactInformation = () => {
  return (
    <View style={{ margin: 15, padding: 15, backgroundColor: 'white', borderRadius: 10, width: '90%', alignSelf: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15, color: '#222' }}>
        Contact Info
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 8, color: 'gray' }}>
        Email: mohsinraza@gmail.com
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 8, color: 'gray' }}>
        Phone: +92 123 4567890
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 8, color: 'gray' }}>
        Address: 123 Main Street, City, Pakistan
      </Text>

      <Text style={{ fontSize: 16, color: 'gray' }}>
        Website: www.mohsinraza.com
      </Text>
    </View>
  )
}

export default ContactInformation