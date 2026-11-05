# React Native – Bottom Tab Navigation

## 1. What is Bottom Tab Navigation?

Bottom Tab Navigation is a navigation system in React Native that allows users to move between different screens using tabs displayed at the bottom of the application.

For example:
- Home
- Search
- Profile
- Settings

When a user clicks a tab, its respective screen opens.

## 2. Why do we use Bottom Tab Navigation?

We use Bottom Tab Navigation because:

- It makes navigation easy for users.
- Users can quickly switch between screens.
- It provides a better user experience.
- It is commonly used in real-world applications.
- It keeps important screens easily accessible.

**Real-world examples:** Instagram, Facebook, Shopping Apps, Banking Apps and Music Apps.

## 3. Installation

Install the required packages:

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-screens
npm install react-native-safe-area-context
npm install react-native-vector-icons
```

For React Native CLI, rebuild the Android application after installing native dependencies.

## 4. Basic Setup

First, import the required packages:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
```

Create the navigator:

```javascript
const Tab = createBottomTabNavigator();
```

`createBottomTabNavigator()` creates a Bottom Tab Navigation instance.

## 5. Create Separate Screen Components

Each tab has its own screen component.

```javascript
const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

const ProfileScreen = () => {
    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    );
};

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );
};
```

## 6. Create Bottom Tab Navigation

```javascript
const TabNavigation = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />

        </Tab.Navigator>
    );
};
```

### Important concepts

- `Tab.Navigator`: Creates the bottom navigation container.
- `Tab.Screen`: Creates an individual tab.
- `name`: Defines the screen name.
- `component`: Defines which component will display when the tab is selected.

## 7. What is screenOptions?

`screenOptions` is used to customize the appearance and behavior of navigation screens.

Example:

```javascript
<Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
    }}
>
```

### Important properties

| Property | Purpose |
|---|---|
| `headerShown` | Shows or hides the header |
| `tabBarActiveTintColor` | Changes selected icon and label color |
| `tabBarInactiveTintColor` | Changes unselected icon and label color |
| `tabBarStyle` | Customizes the complete bottom bar |
| `tabBarLabel` | Changes the label text |
| `tabBarLabelStyle` | Styles the label text |
| `tabBarIcon` | Displays an icon for each tab |
| `tabBarActiveBackgroundColor` | Changes selected tab background |
| `tabBarInactiveBackgroundColor` | Changes unselected tab background |
| `tabBarBadge` | Displays a badge on a tab |

## 8. What is route?

`route` is an object provided by React Navigation that contains information about the current screen.

Example:

```javascript
screenOptions={({ route }) => ({
    // Access current screen information
})}
```

We can use `route.name` to identify which screen is being displayed.

## 9. What is focused?

`focused` is a Boolean value provided by React Navigation.

It tells us whether a tab is currently selected or not.

- `true`: Tab is selected.
- `false`: Tab is not selected.

Example:

```javascript
tabBarIcon: ({ focused, color, size }) => {

    let iconName;

    if (focused) {
        iconName = 'home';
    } else {
        iconName = 'home-outline';
    }

    return (
        <Ionicons
            name={iconName}
            size={size}
            color={color}
        />
    );
}
```

## 10. Dynamic Icon Handling

We can display different icons depending on the selected screen.

```javascript
const IconHandler = ({ route, focused, color, size }) => {

    let iconName;

    if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    }
    else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
    }
    else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
    }

    return (
        <Ionicons
            name={iconName}
            size={size}
            color={color}
        />
    );
};
```

Usage:

```javascript
tabBarIcon: ({ focused, color, size }) =>
    IconHandler({ route, focused, color, size })
```

## 11. What is tabBarLabel?

`tabBarLabel` controls the text displayed below the tab icon.

Example:

```javascript
tabBarLabel: 'Dashboard'
```

We can also customize labels dynamically:

```javascript
tabBarLabel: ({ focused, color }) => (
    <Text
        style={{
            color: color,
            fontWeight: focused ? 'bold' : 'normal',
        }}
    >
        Home
    </Text>
)
```

### tabBarLabel vs tabBarLabelStyle

- `tabBarLabel`: Changes the label text.
- `tabBarLabelStyle`: Changes the label's appearance.

Example:

```javascript
tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
}
```

## 12. What is tabBarStyle?

`tabBarStyle` customizes the complete bottom navigation bar.

Example:

```javascript
tabBarStyle: {
    backgroundColor: '#222831',
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 0,
    elevation: 5,
}
```

We can customize:
- Background color
- Height
- Padding
- Border
- Shadow

**Important difference:**

- `tabBarStyle`: Changes the entire bottom bar.
- `tabBarActiveBackgroundColor`: Changes the selected tab's background.
- `tabBarInactiveBackgroundColor`: Changes the unselected tabs' background.

## 13. What is tabBarBadge?

A badge displays a small number or notification indicator on a tab.

Example:

```javascript
options={{
    tabBarBadge: 5,
}}
```

This displays 5 notifications on the selected tab's badge location.

### Dynamic Badge Using useState

```javascript
const [count, setCount] = useState(5);
```

Display the badge:

```javascript
options={{
    tabBarBadge: count,
}}
```

Update the badge when the user opens Notifications:

```javascript
listeners={{
    focus: () => setCount(0),
}}
```

### How it works

1. Initially, the badge displays 5.
2. The user opens Notifications.
3. The focus event runs.
4. `setCount(0)` updates the state.
5. The badge updates to 0.
6. When the user returns to Home, the badge remains 0.

## 14. What is focus listener?

A focus listener detects when a screen becomes active.

Example:

```javascript
listeners={{
    focus: () => {
        console.log('Screen is focused');
    },
}}
```

We used it to reset notification badges when the Notifications screen opens.

## 15. Important Navigation Concepts I Practiced

During this practice, I learned:

- Creating Bottom Tab Navigation.
- Creating multiple screen components.
- Using `createBottomTabNavigator()`.
- Using `Tab.Navigator` and `Tab.Screen`.
- Understanding `screenOptions`.
- Understanding the `route` object.
- Understanding the `focused` property.
- Using Ionicons.
- Creating dynamic icons.
- Customizing active and inactive colors.
- Customizing tab labels.
- Using `tabBarLabelStyle`.
- Customizing the complete tab bar using `tabBarStyle`.
- Changing selected and unselected tab backgrounds.
- Adding notification badges.
- Updating badges using `useState`.
- Using the `focus` event listener.
- Hiding headers using `headerShown`.

## 16. Important Note

`tabBarIndicatorStyle` is not a standard Bottom Tab Navigation property. It is used with Material Top Tab Navigation to customize the indicator below the selected tab.

Bottom Tabs and Material Top Tabs have different styling options.

## 17. Practice Projects

I practiced and explored these real-world application ideas:

1. Food Delivery App – Home, Orders, Favorites, Profile.
2. Notification App – Dynamic notification badge.
3. Shopping App – Home, Products, Cart, Profile.
4. Music App – Home, Search, Library, Profile.
5. Expense Tracker – Dashboard, Expenses, Reports, Profile.
6. Banking App – Home, Transactions, Cards, Profile.
7. Social Media App – Home, Search, Reels, Notifications, Profile.

## 18. Final Summary

Bottom Tab Navigation helps users move between different screens through a navigation bar at the bottom of an application.

The most important concepts are:

- `createBottomTabNavigator()` creates the navigator.
- `Tab.Navigator` contains all tabs.
- `Tab.Screen` defines individual screens.
- `screenOptions` customizes navigation.
- `route` identifies the current screen.
- `focused` identifies whether a tab is selected.
- `tabBarIcon` displays icons.
- `tabBarLabel` displays tab names.
- `tabBarStyle` customizes the complete bar.
- `tabBarBadge` displays notifications.
- `useState` manages dynamic values.
- `listeners` handles navigation events.

**My learning goal:** Build real-world React Native applications using Bottom Tab Navigation, dynamic icons, badges, screen customization and state management.