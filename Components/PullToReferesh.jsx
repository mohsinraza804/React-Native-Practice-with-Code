import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

const PullToRefreshFlatList = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', price: 120000 },
        { id: 2, name: 'iPhone 15', price: 250000 },
        { id: 3, name: 'Samsung S24', price: 220000 },
        { id: 4, name: 'Headphones', price: 8000 },
        { id: 5, name: 'Smart Watch', price: 12000 },
        { id: 6, name: 'Nike Shoes', price: 15000 },
        { id: 7, name: 'Jeans', price: 4500 },
        { id: 8, name: 'Jacket', price: 7000 },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    const refreshProducts = () => {

        setRefreshing(true);

        // Simulate API request
        setTimeout(() => {

            setProducts([
                { id: 1, name: 'Updated Laptop', price: 115000 },
                { id: 2, name: 'Updated iPhone', price: 245000 },
                { id: 3, name: 'Updated Samsung', price: 215000 },
                { id: 4, name: 'Updated Headphones', price: 7500 },
                { id: 5, name: 'Updated Watch', price: 11000 },
                { id: 6, name: 'Updated Nike Shoes', price: 14500 },
                { id: 7, name: 'Updated Jeans', price: 4000 },
                { id: 8, name: 'Updated Jacket', price: 6500 },
            ]);

            setRefreshing(false);

        }, 1500);
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>

            <Text style={styles.name}>
                {item.name}
            </Text>

            <Text>
                Rs. {item.price}
            </Text>

        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Pull To Refresh
            </Text>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}

                onRefresh={refreshProducts}

                refreshing={refreshing}
            />

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },

    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },

    item: {
        borderWidth: 1,
        padding: 15,
        marginBottom: 10
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default PullToRefreshFlatList;