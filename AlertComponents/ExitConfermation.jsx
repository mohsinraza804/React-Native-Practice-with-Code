
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React from 'react';

const ExitConfermation = () => {
    const ExitHandler = () => {
        Alert.alert(
            'Exit',
            'Are you sure you want to exit?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('No'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        setTimeout(() => {
                            Alert.alert(
                                'Exit Confirmed',
                                'You have confirmed exit.',
                                [
                                    {
                                        text: 'OK',
                                        onPress: () => console.log('Exit Screen')
                                    }
                                ],
                                { cancelable: false }
                            );
                        }, 1000);
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Exit Confirmation</Text>

            <TouchableOpacity
                onPress={ExitHandler}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Exit Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25
    },
    button: {
        backgroundColor: '#d32f2f',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ExitConfermation;
