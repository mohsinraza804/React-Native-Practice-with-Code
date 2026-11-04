import React from 'react';
import { View, Text, Button } from 'react-native';

const Logout = ({ setLoggedIn, setName, setEmail, setPassword }) => {
  const handleLogout = () => {
    setLoggedIn(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Logout</Text>
      <Button title="Confirm Logout" onPress={handleLogout} />
    </View>
  );
};

export default Logout;