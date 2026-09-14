import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { content } from './contentinfo'
import DisplayContentComponent from './DisplayContentComponent'
import { styles } from './Stylesheet'
const ContactScreen = () => {
    const renderitem = ({ item }) => (
        <View>
            <DisplayContentComponent name={item.name} email={item.email} />
        </View>
    )
    return (
        <FlatList
            data={content}
            renderItem={renderitem}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <Text style={styles.heading}>
                    Contact
                </Text>}
            contentContainerStyle={styles.container}
        />
    )
}

export default ContactScreen