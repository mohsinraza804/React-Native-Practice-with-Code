import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const ProdunctComponent = () => {
    const [count, setCount] = React.useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handlebuyNow = () => {
        setCount(count==0 ? count + 1 : count);
        alert("Thank you for your purchase! \nQuantity: " + count + "\nTotal Price: $" + (count * 50000));
    }
    return (
        <View style={{ margin: 20, padding: 20, borderWidth: 1, borderColor: "black" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginBottom: 10 }}>BMW Car</Text>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0_A0A7sybhKA4wadeNewRi96PXqY5ZvKOryljNsfDRhXbyRGqlLPu11Q&s=10' }}
                style={{ width: 245, height: 200 }}
            />
            <View style={{ marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Price: $50,000</Text>
                <Text>Model: 2023</Text>
            </View>
            <View style={{ marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Button title="Buy Now" onPress={handlebuyNow} />
                <Button title="Add to Cart" onPress={() => alert("Product added to cart!")} />
            </View>
            <View style={{ marginTop: 10, gap : 10 }}>
                <Text style={{alignSelf: "center"}}>Quantity: {count}</Text>
                <Button title="Quantity" onPress={handleIncrement} />
            </View>
        </View>
    )
}

export default ProdunctComponent