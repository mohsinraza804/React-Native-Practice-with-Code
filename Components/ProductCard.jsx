import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const ProductCard = (props) => {

  const handleAddToCarts = () => {
    alert(`${props.product.name} added to cart!`);
    props.handleAddToCart(props.product);
  };

  return (
    <View style={styles.button}>
      <Button
        title="Add to Cart"
        onPress={handleAddToCarts}
        color="#168AAD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ProductCard;