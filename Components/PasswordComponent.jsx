import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const PasswordComponent = () => {
  const [password, setPassword] = useState('');

  const [toggle, setToggle] = useState(true);
  return (
    <View style={{
      margin: 20,
      padding: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      backgroundColor: '#f5f5f5',
    }}>
      <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>Weak Password Component </Text>
      <TextInput
        placeholder='Enter Password'
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={toggle}
        style={{ fontSize: 15, borderWidth: 2, borderColor: 'black', padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
      />

      <Button title={toggle ? "Show Password" : "Hide Password"} onPress={() => setToggle(!toggle) } />

      {
        password.length == 0 ? (
          <Text style={{ fontSize: 18, marginTop: 20 }} >Enter password</Text>
        ) : password.length < 6 ? (
          <Text style={{ color: 'red', fontSize: 18, marginTop: 20 }}>Weak Password</Text>
        ) : password.length < 11 ? (
          <Text style={{ color: 'orange', fontSize: 18, marginTop: 20 }}>Medium Passwrd</Text>
        ) : <Text style={{ color: 'green', fontSize: 18, marginTop: 20 }}>Strong Password</Text>
      }

    </View>


  )
}

export default PasswordComponent