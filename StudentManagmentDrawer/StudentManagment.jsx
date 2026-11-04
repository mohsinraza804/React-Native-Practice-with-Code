import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Student from './Student';
import Teachers from './Teachers';
import Setting from './Setting';
const Drawer = createDrawerNavigator();

const StudentManagment = () => {
    const Icon = () => (
        <View style={{ width: 20, height: 20, backgroundColor: 'blue', borderRadius: 10 }} >
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJXmPWyiQ80XLTpBgnTdUBzXQDGdne4y5S87Up1vvVNIaVr9MsIE0kXOj&s=10" }} style={{ width: 20, height: 20 }} />
        </View> 
    )
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: 'lightgray',
                width: 240,
            },

            drawerActiveTintColor: 'blue',
            drawerInactiveTintColor: 'black',
            drawerActiveBackgroundColor: 'lightblue',
            drawerInactiveBackgroundColor: 'lightgray',
            drawerLabelStyle: {
                fontSize: 16,
            },

            headerStyle: {
                backgroundColor: 'lightblue',
                textAlign: 'center',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
            },

            headerTintColor: 'black',
        }}>
            <Drawer.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name='Student' component={Student} />
            <Drawer.Screen name='Teachers' component={Teachers}  />
            <Drawer.Screen name='Setting' component={Setting} options={{
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                drawerItemStyle: {
                    marginVertical: 5,
                },
                drawerIcon: Icon,
            }}/>
        </Drawer.Navigator>
    )
}

export default StudentManagment