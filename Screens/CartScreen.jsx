
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

const CartScreen = ({
  navigation,
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Your Shopping Cart 🛒</Text>

      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🛍️</Text>
          <Text style={styles.emptyText}>Your cart is empty!</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </Pressable>
        </View>
      ) : (
        <>
          {cart.map(item => (
            <View style={styles.card} key={item.id}>
              <Text style={styles.emoji}>{item.emoji}</Text>

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  Rs. {item.price.toLocaleString()}
                </Text>

                <View style={styles.quantity}>
                  <Pressable
                    style={styles.qtyButton}
                    onPress={() => decreaseQuantity(item.id)}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </Pressable>

                  <Text style={styles.qtyNumber}>
                    {item.quantity}
                  </Text>

                  <Pressable
                    style={styles.qtyButton}
                    onPress={() => increaseQuantity(item.id)}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </Pressable>
                </View>

                <Pressable
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.remove}>Remove Product</Text>
                </Pressable>
              </View>
            </View>
          ))}

          <View style={styles.summary}>
            <Text style={styles.total}>
              Total: Rs. {totalPrice.toLocaleString()}
            </Text>

            <Pressable
              style={styles.checkout}
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.buttonText}>
                Proceed to Checkout →
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E293B',
  },
  empty: {
    alignItems: 'center',
    marginTop: 70,
  },
  emptyEmoji: {
    fontSize: 65,
  },
  emptyText: {
    fontSize: 19,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },
  emoji: {
    fontSize: 40,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  price: {
    color: '#2563EB',
    marginVertical: 6,
    fontWeight: 'bold',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  qtyButton: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 6,
  },
  qtyText: {
    fontSize: 20,
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  qtyNumber: {
    marginHorizontal: 15,
    fontSize: 17,
  },
  remove: {
    color: '#DC2626',
    fontWeight: 'bold',
    marginTop: 5,
  },
  summary: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E293B',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 13,
    borderRadius: 8,
  },
  checkout: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CartScreen;
