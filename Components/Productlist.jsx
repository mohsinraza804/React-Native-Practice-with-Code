import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

const Productlist = (props) => {

  const handleAddToCart = (product) => {
    props.setAddtocart([
      ...props.addtocart,
      product,
    ]);
  };

  return (
    <View>

      <Text style={styles.heading}>
        Products
      </Text>

      {props.product.map((product) => (
        <View
          key={product.id}
          style={styles.product}
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

          <ProductCard
            handleAddToCart={handleAddToCart}
            product={product}
          />

        </View>
      ))}

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

  product: {
    backgroundColor: '#F2FAFD',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D6EEF7',
  },

  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0B3954',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#168AAD',
    marginTop: 5,
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
    lineHeight: 20,
  },
});

export default Productlist;