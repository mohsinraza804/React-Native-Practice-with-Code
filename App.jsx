import {Text, Pressable, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    const onPressHandler = () => {
        console.log(`on press`)
    }
    const onPressInHandler = () => {
        console.log("Press In")
    }
    const onpressoutHandler = () => {
        console.log('press out')
    }
    const onLongPressHandler = () => {
        console.log('Long Press')
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.constainer}>


                <Text style={styles.Heading}> Pressable Component </Text>
                <Pressable style={styles.Button}
                    onPress={onPressHandler} 
                    onPressIn={onPressInHandler}
                    onPressOut={onpressoutHandler}
                    onLongPress={onLongPressHandler}
                    delayLongPress={6000}
                >
                    <Text style={styles.buttonText}>Press me</Text>
                </Pressable>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    constainer:{
        marginVertical: 10,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Heading:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    Button:{
        borderRadius: 10,
        elevation: 7,
        padding: 10,
        backgroundColor: '#e76060'
    },
    buttonText:{
        marginHorizontal: 15,
        textSize: 14,
        padding: 7,
    }

})

export default App