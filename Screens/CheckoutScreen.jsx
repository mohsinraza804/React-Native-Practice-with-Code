
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

const CheckoutScreen = ({
  cart,
  onPlaceOrder,
}) => {

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharges = cart.length > 0 ? 200 : 0;

  const grandTotal = totalPrice + deliveryCharges;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Order Summary 📦</Text>

      <View style={styles.card}>
        {cart.map(item => (
          <View style={styles.product} key={item.id}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>
                Quantity: {item.quantity}
              </Text>
            </View>

            <Text style={styles.price}>
              Rs. {(item.price * item.quantity).toLocaleString()}
            </Text>
          </View>
        ))}

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>
            Rs. {totalPrice.toLocaleString()}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Delivery Charges</Text>
          <Text style={styles.value}>
            Rs. {deliveryCharges}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Grand Total</Text>
          <Text style={styles.total}>
            Rs. {grandTotal.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.paymentCard}>
        <Text style={styles.paymentHeading}>
          Payment Method
        </Text>
        <Text style={styles.paymentText}>
          💵 Cash on Delivery
        </Text>
        <Text style={styles.note}>
          Pay when your order arrives.
        </Text>
      </View>

      <Pressable
        style={[
          styles.button,
          cart.length === 0 && styles.disabledButton,
        ]}
        onPress={onPlaceOrder}
        disabled={cart.length === 0}
      >
        <Text style={styles.buttonText}>
          Place Order →
        </Text>
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    elevation: 3,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  quantity: {
    color: '#64748B',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    color: '#2563EB',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    color: '#64748B',
    fontSize: 15,
  },
  value: {
    fontWeight: 'bold',
    color: '#1E293B',
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  paymentCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
  },
  paymentHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  paymentText: {
    fontSize: 16,
    marginTop: 12,
    color: '#334155',
  },
  note: {
    color: '#64748B',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 25,
  },
  disabledButton: {
    backgroundColor: '#94A3B8',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
