
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 4500, emoji: '🎧' },
  { id: 2, name: 'Smart Watch', price: 6500, emoji: '⌚' },
  { id: 3, name: 'Gaming Mouse', price: 2500, emoji: '🖱️' },
  { id: 4, name: 'Keyboard', price: 3500, emoji: '⌨️' },
  { id: 5, name: 'Mobile Phone', price: 45000, emoji: '📱' },
  { id: 6, name: 'Laptop', price: 95000, emoji: '💻' },
];

const HomeScreen = ({ addToCart }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.heading}>Welcome to My Store 👋</Text>
        <Text style={styles.subtitle}>
          Find your favorite products here.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Popular Products</Text>

      {products.map(item => (
        <View style={styles.card} key={item.id}>
          <Text style={styles.emoji}>{item.emoji}</Text>

          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>
              Rs. {item.price.toLocaleString()}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>+ Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcome: {
    backgroundColor: '#DBEAFE',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1E293B',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  emoji: {
    fontSize: 45,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  price: {
    fontSize: 15,
    color: '#2563EB',
    marginVertical: 7,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
