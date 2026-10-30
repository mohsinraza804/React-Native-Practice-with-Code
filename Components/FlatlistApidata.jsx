import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const FlatlistApidata = () => {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios.get('http://10.0.2.2:3000/expenses').then((result) => {
            setData(result.data)
        })
    }, [])
    const render = ({ item }) => (
        <View style={{ margin: 5, padding: 10, borderWidth: 1, borderColor: 'Black' , borderRadius: 50}}>
            <Text style={{padding: 2, textAlign: 'center' }}>Name: {item.title}</Text>
            <Text style={{padding: 2, textAlign: 'center' }}>Category: {item.category}</Text>
        </View>
    )
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ padding: 10, fontWeight: 'bold', textAlign: 'center', fontSize: 22, fontWeight: '900' }}>Flatlist Api data</Text>
            <FlatList
                data={data}
                renderItem={render}
                keyExtractor={data => data.id.toString()}

            />
        </View>
    )
}

export default FlatlistApidata