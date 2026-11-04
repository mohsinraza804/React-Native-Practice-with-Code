import { View, Text } from 'react-native';
import React from 'react';

const Dashboard = ({ name }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard</Text>
      <Text style={{ fontSize: 18 }}>Welcome, {name}!</Text>
    </View>
  );
};

export default Dashboard;