import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Stylesheet'

const DisplayContentComponent = ({ name, email }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    )
}

export default DisplayContentComponent