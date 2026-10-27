import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'

const AlertExample = () => {

    const alertHandler = () => {

        Alert.alert(
            'Alert Title',
            'This is the alert message.',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }

        )
    }

    const optionHandler = () => {
        Alert.alert(
            'Options',
            'please choice your option',
            [
                { text: 'save', onPress: () => console.log('Successfully save') },
                { text: 'Discard', onPress: () => console.log('Discard') },
                { text: 'Cancel', onPress: () => console.log('Cancel') },
            ],
            { cancelable: false }

        )
    }

    const shopingHandler = () => {
        Alert.alert(
            'Confirm Order',
            'Do you want to confirm our order',
            [
                {text: "Confirm" , onPress: ()=>console.log('confirm')},
                {text: "cancel" , onpress: ()=>console.log('cancel')},
            ],
            {cancelable: false}
        )
    }

    return (
        <View style={{ paddingTop: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>AlertExample</Text>
            <TouchableOpacity onPress={alertHandler} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Show Alert</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={optionHandler} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Show Option</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={shopingHandler} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Shopping cart confermation</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlertExample