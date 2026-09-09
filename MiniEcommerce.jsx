import React, { useState } from 'react';

import {View,Text,FlatList,TextInput,Button,StyleSheet,} from 'react-native';

const allProducts = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 120000,
  },
  {
    id: 2,
    name: 'iPhone 15',
    category: 'Electronics',
    price: 250000,
  },
  {
    id: 3,
    name: 'Samsung S24',
    category: 'Electronics',
    price: 220000,
  },
  {
    id: 4,
    name: 'Headphones',
    category: 'Electronics',
    price: 8000,
  },
  {
    id: 5,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 12000,
  },
  {
    id: 6,
    name: 'T-Shirt',
    category: 'Clothes',
    price: 2500,
  },
  {
    id: 7,
    name: 'Jeans',
    category: 'Clothes',
    price: 4500,
  },
  {
    id: 8,
    name: 'Jacket',
    category: 'Clothes',
    price: 7000,
  },
  {
    id: 9,
    name: 'Nike Shoes',
    category: 'Shoes',
    price: 15000,
  },
  {
    id: 10,
    name: 'Running Shoes',
    category: 'Shoes',
    price: 8500,
  },
  {
    id: 11,
    name: 'Cap',
    category: 'Accessories',
    price: 1500,
  },
  {
    id: 12,
    name: 'Wallet',
    category: 'Accessories',
    price: 2500,
  },
];

const MiniEcommerce = () => {
  const [products, setProducts] = useState(
    allProducts.slice(0, 6)
  );

  const [search, setSearch] = useState('');

  const [category, setCategory] = useState('All');

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);


  const filteredProducts = products.filter((item) => {

    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === 'All' ||
      item.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleCart = (id) => {

    if (cart.includes(id)) {

      // Remove product
      setCart(
        cart.filter((itemId) => itemId !== id)
      );

    } else {

      // Add product
      setCart([
        ...cart,
        id,
      ]);

    }
  };

  const loadMore = () => {

    // Already loading
    if (loading) {
      return;
    }

    // All products already loaded
    if (products.length >= allProducts.length) {
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const nextProducts = allProducts.slice(
        0,
        products.length + 3
      );

      setProducts(nextProducts);

      setLoading(false);

    }, 1000);
  };

  const refreshProducts = () => {

    setRefreshing(true);

    setTimeout(() => {

      // Load first 6 again
      setProducts(
        allProducts.slice(0, 6)
      );

      // Clear search
      setSearch('');

      // Reset category
      setCategory('All');

      setRefreshing(false);

    }, 1000);
  };


  const cartProducts = allProducts.filter((item) =>
    cart.includes(item.id)
  );


  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.price,
    0
  );

  const renderItem = ({ item }) => {

    const isInCart = cart.includes(item.id);

    return (

      <View style={styles.product}>

        <Text style={styles.productName}>
          {item.name}
        </Text>

        <Text style={styles.category}>
          Category: {item.category}
        </Text>

        <Text style={styles.price}>
          Rs. {item.price}
        </Text>

        <Button
          title={
            isInCart
              ? 'Remove from Cart'
              : 'Add to Cart'
          }
          onPress={() => handleCart(item.id)}
        />

      </View>
    );
  };

  return (

    <View style={styles.container}>

      

      <Text style={styles.heading}>
        Mini E-Commerce App
      </Text>


    

      <View style={styles.cartBox}>

        <Text style={styles.cartText}>
          Cart Items: {cart.length}
        </Text>

        <Text style={styles.total}>
          Total: Rs. {totalPrice}
        </Text>

      </View>


      <TextInput
        placeholder="Search product or category"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />


      <View style={styles.categoryButtons}>

        <Button
          title="All"
          onPress={() => setCategory('All')}
        />

        <Button
          title="Electronics"
          onPress={() => setCategory('Electronics')}
        />

        <Button
          title="Clothes"
          onPress={() => setCategory('Clothes')}
        />

        <Button
          title="Shoes"
          onPress={() => setCategory('Shoes')}
        />

      </View>

      <Button
        title="Accessories"
        onPress={() => setCategory('Accessories') }
      />


      <FlatList

        data={filteredProducts}

        renderItem={renderItem}

        keyExtractor={(item) =>
          item.id.toString()
        }

        onEndReached={loadMore}

        onEndReachedThreshold={0.5}

        onRefresh={refreshProducts}

        refreshing={refreshing}

        ListFooterComponent={

          loading ? (
            <Text style={styles.loading}>
              Loading more products...
            </Text>
          ) : null

        }

        // No products
        ListEmptyComponent={

          <Text style={styles.empty}>
            No products found
          </Text>

        }

      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#192d5a',
    paddingHorizontal: 15,
    paddingTop: 12,
  },

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },

  // =========================
  // CART BOX
  // =========================

  cartBox: {
    backgroundColor: '#1E293B',

    padding: 15,

    marginBottom: 15,

    borderRadius: 15,

    borderWidth: 1,
    borderColor: '#38BDF8',

    elevation: 8,

    shadowColor: '#38BDF8',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },

  cartText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  total: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4ADE80',
    marginTop: 6,
  },

  // =========================
  // SEARCH INPUT
  // =========================

  input: {
    backgroundColor: '#1E293B',

    borderWidth: 1,
    borderColor: '#38BDF8',

    borderRadius: 12,

    paddingHorizontal: 15,
    paddingVertical: 12,

    marginBottom: 15,

    fontSize: 16,

    color: '#FFFFFF',

    elevation: 5,

    shadowColor: '#38BDF8',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  // =========================
  // CATEGORY BUTTONS
  // =========================

  categoryButtons: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,
    
  },

  // =========================
  // PRODUCT CARD
  // =========================

  product: {
    backgroundColor: '#1E293B',

    borderRadius: 15,

    padding: 17,

    marginBottom: 8,
    marginTop: 15,

    borderWidth: 1,
    borderColor: '#334155',

    elevation: 7,

    shadowColor: '#38BDF8',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,

    shadowRadius: 7,
  },

  productName: {
    fontSize: 21,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginBottom: 6,
  },

  category: {
    fontSize: 14,

    color: '#94A3B8',

    marginBottom: 8,
  },

  price: {
    fontSize: 19,

    fontWeight: 'bold',

    color: '#38BDF8',

    marginBottom: 12,
  },

  // =========================
  // LOADING
  // =========================

  loading: {
    textAlign: 'center',

    fontSize: 16,

    color: '#38BDF8',

    padding: 15,
  },

  // =========================
  // EMPTY
  // =========================

  empty: {
    textAlign: 'center',

    fontSize: 18,

    color: '#94A3B8',

    marginTop: 30,
  },

});

export default MiniEcommerce
