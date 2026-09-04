import { View, Text } from 'react-native'
import React from 'react'

const PropsComponent = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>UsestateHook</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>{props.name}</Text>
            <Text style={{ fontSize: 16, alignSelf: "center" }}>Count: {props.data}</Text>
        </View>
    )
}

export default PropsComponent