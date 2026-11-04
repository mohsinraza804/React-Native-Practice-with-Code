import { View, Text } from 'react-native';
import React from 'react';

const Myporfile = ({ name, email }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default Myporfile;