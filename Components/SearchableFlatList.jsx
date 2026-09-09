import {
    View,
    Text,
    FlatList,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';

import React, { useState } from 'react';

const SearchableFlatList = () => {

    const products = [
        {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            price: 120000
        },
        {
            id: 2,
            name: "iPhone 15",
            category: "Electronics",
            price: 250000
        },
        {
            id: 3,
            name: "Samsung Galaxy S24",
            category: "Electronics",
            price: 220000
        },
        {
            id: 4,
            name: "T-Shirt",
            category: "Clothes",
            price: 2500
        },
        {
            id: 5,
            name: "Jeans",
            category: "Clothes",
            price: 4500
        },
        {
            id: 6,
            name: "Nike Shoes",
            category: "Shoes",
            price: 15000
        },
        {
            id: 7,
            name: "Running Shoes",
            category: "Shoes",
            price: 8500
        },
        {
            id: 8,
            name: "Headphones",
            category: "Electronics",
            price: 8000
        },
        {
            id: 9,
            name: "Jacket",
            category: "Clothes",
            price: 7000
        },
        {
            id: 10,
            name: "Smart Watch",
            category: "Electronics",
            price: 12000
        }
    ];


    // Search state
    const [search, setSearch] = useState("");


    // Store IDs of products added to cart
    const [cart, setCart] = useState([]);


    // Search product name OR category
    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );


    // Add / Remove product from cart
    const handleCart = (id) => {

        if (cart.includes(id)) {

            // Remove product
            setCart(
                cart.filter((itemId) => itemId !== id)
            );

        } else {

            // Add product
            setCart(
                [...cart, id]
            );
        }
    };


    const renderItem = ({ item }) => {

        // Check whether THIS product is in cart
        const isInCart = cart.includes(item.id);

        return (
            <View style={styles.view}>

                <Text style={styles.text}>
                    Product Name: {item.name}
                </Text>

                <Text style={styles.text}>
                    Product Category: {item.category}
                </Text>

                <Text style={styles.text}>
                    Price: Rs. {item.price}
                </Text>

                <Button
                    title={
                        isInCart
                            ? "Remove from Cart"
                            : "Add to Cart"
                    }
                    onPress={() => handleCart(item.id)}
                />

            </View>
        );
    };


    return (
        <View style={styles.main}>

            <Text style={styles.heading}>
                Searchable FlatList
            </Text>


            <TextInput
                placeholder="Search by name or category"
                value={search}
                onChangeText={setSearch}
                style={styles.input}
            />


            <Text style={styles.cartText}>
                Cart Items: {cart.length}
            </Text>


            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.container}
            />

        </View>
    );
};


const styles = StyleSheet.create({

    main: {
        flex: 1
    },

    heading: {
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 1,
        margin: 20,
        padding: 10
    },

    cartText: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    container: {
        padding: 10,
        marginHorizontal: 20
    },

    view: {
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        justifyContent: 'center'
    },

    text: {
        fontSize: 16,
        padding: 5
    }

});


export default SearchableFlatList;

