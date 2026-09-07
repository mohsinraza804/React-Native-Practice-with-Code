import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import LiveCharacterCounter from './Components/LiveCharacterCounter'
import PasswordComponent from './Components/PasswordComponent'
const App = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <View style={{
          margin: 20,
          padding: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 15,
          backgroundColor: '#f5f5f5',
        }}>
          <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>Input Text</Text>

          <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>Name: {text}</Text>

          <TextInput
            placeholder="Enter text"
            value={text}
            onChangeText={(value) => setText(value)}
            style={{ borderWidth: 2, borderColor: 'black', padding: 10, borderRadius: 10, margin: 10 }} />

          <Button title="clear" onPress={() => setText('')} />
        </View>

        <LiveCharacterCounter />

        <PasswordComponent />

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;