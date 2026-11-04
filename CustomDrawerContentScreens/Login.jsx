import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({ setLoggedIn, setName, setEmail, setPassword }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {
    if (!nameInput || !emailInput || !passwordInput) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setName(nameInput);
    setEmail(emailInput);
    setPassword(passwordInput);
    setLoggedIn(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>

      <TextInput
        placeholder="Name"
        value={nameInput}
        onChangeText={setNameInput}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={emailInput}
        onChangeText={setEmailInput}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={passwordInput}
        onChangeText={setPasswordInput}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  input: {
    color: 'black',
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
  },
};

export default Login;