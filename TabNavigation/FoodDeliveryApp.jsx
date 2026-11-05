import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const IconHandler = ({ route, focused, color, size }) => {
    let iconName;
    if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
    } else if (route.name === 'Favorites') {
        iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === 'Orders') {
        iconName = focused ? 'list' : 'list-outline';

    }
    return <Ionicons name={iconName} size={size} color={color} />;
}

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}
const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorites</Text>
        </View>
    )
}
const OrdersScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Orders</Text>
        </View>
    )
}


const FoodDeliveryApp = () => {
    const [badgeCount, setBadgeCount] = React.useState(5);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <IconHandler route={route} focused={focused} color={color} size={size} />;
                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'orange',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white',
                },
                headerTitleAlign: 'center',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen}
                options={{
                    tabBarBadge: badgeCount,
                    tabBarBadgeStyle: {
                        backgroundColor: 'red',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 12,
                        marginTop: -3,
                        borderRadius: 10,                        
                    }
                }}
                listeners={{
                    focus: () => setBadgeCount(0),
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default FoodDeliveryApp