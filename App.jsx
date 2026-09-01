import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#929596' }}>
      <SafeAreaView>
        <View style={{ margin: 10, padding: 10, backgroundColor: 'lightblue', borderRadius: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>This is my First App. I hope this journey will good for me</Text>
          <Image
            source={{
              uri: 'https://www.iteachrecruiters.com/images/blog/logo/react-native.png',
            }}init
            style={{ width: 210, height: 230, marginTop: 30, alignSelf: 'center' }}
          />
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}init
            style={{ width: 200, height: 200, marginTop: 10, alignSelf: 'center' }}
          />
          <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 16 ,alignSelf: 'center'}}>1st React Native App</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>

  );
};

export default App;