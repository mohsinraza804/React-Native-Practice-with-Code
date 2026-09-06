import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const Cartitems = (props) => {

  const handleRemoveFromCart = (product) => {
    const updatedCart = props.addtocart.filter(
      (item) => item.id !== product.id
    );

    props.setAddtocart(updatedCart);
  };

  return (
    <View>

      <Text style={styles.heading}>
        Shopping Cart ({props.addtocart.length})
      </Text>

      {props.addtocart.length === 0 ? (

        <Text style={styles.empty}>
          Your cart is empty.
        </Text>

      ) : (

        props.addtocart.map((product) => (
          <View
            key={product.id}
            style={styles.item}
          >

            <Text style={styles.name}>
              {product.name}
            </Text>

            <Text style={styles.price}>
              ${product.price}
            </Text>

            <Text style={styles.description}>
              {product.description}
            </Text>

            <Button
              title="Remove from Cart"
              onPress={() => handleRemoveFromCart(product)}
              color="#D9534F"
            />

          </View>
        ))

      )}

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B3954',
    marginBottom: 12,
  },

  empty: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    padding: 15,
  },

  item: {
    backgroundColor: '#F2FAFD',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#D6EEF7',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B3954',
  },

  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#168AAD',
    marginVertical: 5,
  },

  description: {
    color: '#666',
    marginBottom: 8,
  },
});

export default Cartitems;