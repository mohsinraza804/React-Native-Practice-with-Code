
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CheckoutScreen from './Screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    Alert.alert('Success', 'Product added to cart!');
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  // Calculate total items
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#2563EB',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            contentStyle: {
              backgroundColor: '#F1F5F9',
            },
          }}
        >

          {/* HOME SCREEN */}
          <Stack.Screen
            name="Home"
            options={({ navigation }) => ({
              title: 'My Store',

              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.headerButton}>
                    ☰
                  </Text>
                </Pressable>
              ),

              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate('Cart')}
                >
                  <Text style={styles.headerButton}>
                    🛒 {totalItems}
                  </Text>
                </Pressable>
              ),
            })}
          >
            {({ navigation }) => (
              <HomeScreen
                navigation={navigation}
                addToCart={addToCart}
              />
            )}
          </Stack.Screen>

          {/* CART SCREEN */}
          <Stack.Screen
            name="Cart"
            options={{
              title: 'My Cart',
            }}
          >
            {({ navigation }) => (
              <CartScreen
                navigation={navigation}
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            )}
          </Stack.Screen>

          {/* PROFILE SCREEN */}
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'My Profile',
            }}
          />

          {/* CHECKOUT SCREEN */}
          <Stack.Screen
            name="Checkout"
            options={{
              title: 'Checkout',
            }}
          >
            {({ navigation }) => (
              <CheckoutScreen
                navigation={navigation}
                cart={cart}
                onPlaceOrder={() => {
                  Alert.alert(
                    'Order Successful',
                    'Your order has been placed successfully!',
                    [
                      {
                        text: 'OK',
                        onPress: () => {
                          setCart([]);
                          navigation.popToTop();
                        },
                      },
                    ]
                  );
                }}
              />
            )}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});

export default App;
