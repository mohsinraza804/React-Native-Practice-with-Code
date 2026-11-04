# React Native Drawer Navigation

## What is Drawer Navigation?

Drawer Navigation is a navigation system in React Native that displays a menu from the side of the screen (usually the left side).

Users can open the drawer and move between different screens of an application.

## Why Do We Use Drawer Navigation?

- To navigate between multiple screens.
- To organize application screens in one side menu.
- To provide easy access to different sections.
- To create a user-friendly navigation experience.
- To display profile information and images in the drawer.

## Installation

```bash
npm install @react-navigation/drawer
```

Additional dependencies may be required according to your React Native setup.

## Basic Syntax

```jsx
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
```

## Important Concepts

### 1. createDrawerNavigator()
Creates a drawer navigation instance.

### 2. Drawer.Navigator
Defines the drawer navigation structure.

### 3. Drawer.Screen
Registers individual screens in the drawer.

### 4. screenOptions
Used to style the drawer and header, such as:
- Background color
- Drawer width
- Active and inactive colors
- Header styling
- Label styling

### 5. drawerContent
Used to customize the drawer's content, such as:
- Profile image
- User name and email
- Custom layouts

### 6. DrawerContentScrollView
Makes custom drawer content scrollable.

### 7. DrawerItemList
Displays the registered drawer screens automatically.

### 8. Props
React Navigation provides drawer information through props. We pass `{...props}` to components such as `DrawerContentScrollView` and `DrawerItemList`.

## What I Practiced

- Creating Drawer Navigation.
- Adding multiple screens.
- Styling drawer items and headers.
- Adding images inside the drawer.
- Customizing drawer content.
- Passing props to drawer components.
- Implementing Login and Logout functionality.
- Showing different screens based on login state.

## Conclusion

Drawer Navigation helps us organize multiple screens and allows users to navigate easily through a side menu. It is commonly used in applications that have several sections.