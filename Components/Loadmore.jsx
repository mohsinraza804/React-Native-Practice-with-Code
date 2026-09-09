import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

const LoadMoreFlatList = () => {

    const allProducts = [
        { id: 1, name: 'Laptop', price: 120000 },
        { id: 2, name: 'iPhone 15', price: 250000 },
        { id: 3, name: 'Samsung S24', price: 220000 },
        { id: 4, name: 'Headphones', price: 8000 },
        { id: 5, name: 'Smart Watch', price: 12000 },
        { id: 6, name: 'Nike Shoes', price: 15000 },
        { id: 7, name: 'Jeans', price: 4500 },
        { id: 8, name: 'Jacket', price: 7000 },
        { id: 9, name: 'T-Shirt', price: 2500 },
        { id: 10, name: 'Running Shoes', price: 8500 },
    ];

    // Initially show first 5 products
    const [products, setProducts] = useState(
        allProducts.slice(0, 5)
    );

    const [loading, setLoading] = useState(false);

    const loadMore = () => {

        if (loading) {
            return;
        }

        if (products.length >= allProducts.length) {
            return;
        }

        setLoading(true);

        // Simulate loading from API
        setTimeout(() => {

            const nextProducts = allProducts.slice(
                0,
                products.length + 5
            );

            setProducts(nextProducts);

            setLoading(false);

        }, 1000);
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
                Load More Products
            </Text>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}

                onEndReached={loadMore}

                onEndReachedThreshold={0.5}

                ListFooterComponent={
                    loading ? (
                        <Text style={styles.loading}>
                            Loading more...
                        </Text>
                    ) : null
                }
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
    },

    loading: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16
    }

});

export default LoadMoreFlatList;