import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { data } from './Data'
import { styles } from './stylsheet'
const GridViewComponent = () => {
    return (
            <ScrollView contentContainerStyle={styles.container} >
                {
                    data.map((item) => (
                        <View key={item.id} style={styles.item}>
                            <Text style={styles.text}>{item.item}</Text>
                        </View>
                    ))
                }
            </ScrollView>        
    )
}

export default GridViewComponent