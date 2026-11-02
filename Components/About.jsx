
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>About</Text>

        <Button
          title="Again About"
          onPress={() => navigation.push('About')}
        />

        <Button
          title="Back Home Screen"
          onPress={() => navigation.popTo('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default About;
