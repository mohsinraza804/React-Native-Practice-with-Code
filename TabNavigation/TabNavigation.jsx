
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Home Screen
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

// Search Screen
const SearchScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Search Screen</Text>
  </View>
);

// Library Screen
const LibraryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Library Screen</Text>
  </View>
);

// Profile Screen
const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

// Icon Handler
const IconHandler = ({ route, focused, color, size }) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Search') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (route.name === 'Library') {
    iconName = focused ? 'library' : 'library-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

// Bottom Tab Navigation
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: 'lightblue',
        tabBarInactiveBackgroundColor: 'white',

        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',

        // Bottom tab background
        tabBarStyle: {
          backgroundColor: '#282424',
          height: 65,
          paddingBottom: 8,
        },

        // Dynamic Icon
        tabBarIcon: ({ focused, color, size }) =>
          IconHandler({ route, focused, color, size }),

        // Dynamic Label
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              color: color,
              fontWeight: focused ? 'bold' : 'normal',
              fontSize: 13,
            }}
          >
            {route.name}
          </Text>
        ),

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default TabNavigation;
