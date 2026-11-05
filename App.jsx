import { View, Text } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import FoodDeliveryApp from './TabNavigation/FoodDeliveryApp'
const App = () => {
  return (
   <NavigationContainer>
     <TabNavigation />
     {/* <FoodDeliveryApp /> */}
   </NavigationContainer>
  )
}

export default App