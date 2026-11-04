import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer as NavigatorContainer } from '@react-navigation/native';

import HomeScreen from './DrawerScreens/HomeScreen';
import ProfileScreen from './DrawerScreens/ProfileScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import StudentManagment from './StudentManagmentDrawer/StudentManagment';
import CustomDrawerContent from './CustomDrawerContentScreens/CustomDrawerContent';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigatorContainer>

      <CustomDrawerContent />

    </NavigatorContainer>
  );
};

export default App;
{/* <Drawer.Navigator
  screenOptions={{
    drawerStyle: {
      backgroundColor: 'lightblue',
      width: 240,
    },
    drawerActiveTintColor: 'white',
    drawerInactiveTintColor: 'black',
    drawerActiveBackgroundColor: 'blue',
    drawerInactiveBackgroundColor: 'lightgray',
    drawerLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    drawerItemStyle: {
      marginVertical: 5,
    },
    headerShown: true,  
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'lightgreen',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator> */}
{/* <StudentManagment /> */}
