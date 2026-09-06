import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import UserProfile from './Components/UserProfile';
import UserInformation from './Components/UserInfornation';
import Counter from './Components/Counter';
import TodoListProps from './Components/TodoListProps';
import { useState } from 'react';
import Productlist from './Components/Productlist'
import Cartitems from './Components/Cartitems';
import { StyleSheet } from 'react-native';
const App = () => {

  const UserInfo = {
    name: 'Ali Raza',
    age: 25,
    email: 'ali.raza@example.com',
    profession: 'Software Engineer',
    description: 'Passionate about coding and technology. Enjoys solving complex problems and learning new programming languages.',
    developmentSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
  }

  const ProductInfo = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      description: 'High-performance laptop for developers'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      description: 'Latest smartphone npwith advanced features'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      description: 'Noise-cancelling headphones for immersive sound experience'
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 200,
      description: 'Stylish smartwatch with fitness tracking capabilities'
    }
  ]

  const [todo, setTodo] = useState([
    { id: 1, task: 'Learn React Native' },
    { id: 2, task: 'Build a mobile app' },
    { id: 3, task: 'Test the app' },
    { id: 4, task: 'Deploy the app' },
  ]);


  const [count, setCount] = React.useState(0);

  const [addtocart, setAddtocart] = React.useState([]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>

          <Text style={styles.mainTitle}>React Native Practice App</Text>

          <View style={styles.section}>
            <UserProfile userInfo={UserInfo} />
          </View>

          <View style={styles.section}>
            <UserInformation userInfo={UserInfo} />
          </View>

          <View style={styles.section}>
            <Counter count={count} setCount={setCount} />
          </View>

          <View style={styles.section}>
            <TodoListProps Todo={todo} setTodo={setTodo} />
          </View>

          <View style={styles.section}>
            <Productlist
              product={ProductInfo}
              addtocart={addtocart}
              setAddtocart={setAddtocart}
            />
          </View>

          <View style={styles.section}>
            <Cartitems addtocart={addtocart} setAddtocart={setAddtocart}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#63c3ff',
  },

  container: {
    padding: 16,
    paddingBottom: 40,
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0B3954',
    marginBottom: 18,
  },

  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
});

export default App