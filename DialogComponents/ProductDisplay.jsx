
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const ProductDisplay = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10.99, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: 5.99, description: 'This is product 3' },
    { id: 4, name: 'Product 4', price: 15.99, description: 'This is product 4' },
    { id: 5, name: 'Product 5', price: 25.99, description: 'This is product 5' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === selectedProduct.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...previousCart,
        { ...selectedProduct, quantity },
      ];
    });

    Alert.alert('Success', `${selectedProduct.name} added to cart!`);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBuyNow = () => {
    if (!selectedProduct) return;

    Alert.alert(
      'Order Summary',
      `Product: ${selectedProduct.name}\nQuantity: ${quantity}\nTotal: $${(
        selectedProduct.price * quantity
      ).toFixed(2)}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setSelectedProduct(null);
            setQuantity(1);
            Alert.alert('Success', 'Order confirmed for this demo!');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Store</Text>

      <View style={styles.cartSummary}>
        <Text style={styles.cartText}>Cart Items: {cartCount}</Text>
        <Text style={styles.cartText}>
          Total: ${cartTotal.toFixed(2)}
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                ${item.price.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleProductPress(item)}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal
        visible={selectedProduct !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalOverlay}>
          <ScrollView
            contentContainerStyle={styles.modalScroll}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {selectedProduct?.name}
              </Text>

              <Text style={styles.description}>
                {selectedProduct?.description}
              </Text>

              <Text style={styles.price}>
                Price: ${selectedProduct?.price.toFixed(2)}
              </Text>

              <Text style={styles.quantityLabel}>Quantity</Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    setQuantity((previous) =>
                      Math.max(1, previous - 1)
                    )
                  }
                >
                  <Text style={styles.quantityButtonText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    setQuantity((previous) => previous + 1)
                  }
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.totalPrice}>
                Total: $
                {selectedProduct
                  ? (selectedProduct.price * quantity).toFixed(2)
                  : '0.00'}
              </Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddToCart}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buyButton}
                onPress={handleBuyNow}
              >
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedProduct(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
    paddingTop: 50,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#111827',
  },
  cartSummary: {
    backgroundColor: '#DBEAFE',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  cartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D4ED8',
    marginVertical: 2,
  },
  list: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  productInfo: {
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  productPrice: {
    fontSize: 16,
    color: '#059669',
    marginTop: 5,
  },
  detailsButton: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
  },
  modalScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 18,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#059669',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111827',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#E5E7EB',
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 28,
    color: '#111827',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111827',
  },
  addButton: {
    backgroundColor: '#059669',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    padding: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDisplay;
