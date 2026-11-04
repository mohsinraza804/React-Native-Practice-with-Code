import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Myporfile from './Myporfile';
import Setting from './Setting';
import Login from './Login';
import Logout from './Logout';
import { Image } from 'react-native';
const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1 }}
    >
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/gradient-blue-technology-background_23-2149436180.jpg?w=2000',
        }}
        style={{
          width: '100%',
          height: 150,
        }}
        resizeMode="cover"
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerImage: () => (
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/gradient-blue-technology-background_23-2149436180.jpg?w=2000' }}
            style={{ width: '100%', height: '100%' }}
          />
        ),
        headerShown: true,
        headerTitleAlign: 'center',
        drawerStyle: {
          backgroundColor: 'lightgray',
          width: 240,
        },
        drawerActiveBackgroundColor: 'lightblue',
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          fontSize: 16,
        },

        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: 'black',
      }}
    >
      {loggedIn ? (
        <>
          <Drawer.Screen name="Dashboard">
            {() => <Dashboard name={name} />}
          </Drawer.Screen>

          <Drawer.Screen name="Profile">
            {() => (
              <Myporfile
                name={name}
                email={email}
                password={password}
              />
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="Settings"
            component={Setting}
          />

          <Drawer.Screen name="Logout">
            {() => (
              <Logout
                setLoggedIn={setLoggedIn}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            )}
          </Drawer.Screen>
        </>
      ) : (
        <Drawer.Screen name="Login">
          {() => (
            <Login
              setLoggedIn={setLoggedIn}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          )}
        </Drawer.Screen>
      )}
    </Drawer.Navigator>
  );
};

export default App;
