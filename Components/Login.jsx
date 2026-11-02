
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {

  const [name, setname] = useState('');
  const [Fname, setFname] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Login</Text>

        <TextInput
          placeholder="Enter name"
          value={name}
          onChangeText={setname}
        />

        <TextInput
          placeholder="Enter Father Name"
          value={Fname}
          onChangeText={setFname}
        />

        <Button
          title="Login"
          onPress={() =>
            navigation.navigate('Home', { name, Fname })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
