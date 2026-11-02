
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ route, navigation }) => {

    const name = route?.params?.name ?? '';
    const Fname = route?.params?.Fname ?? '';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Home</Text>

                <Text>Name: {name || 'No Name'}</Text>
                <Text>Father Name: {Fname || 'No Father Name'}</Text>

                <Button
                    title="Go About Page"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
