import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from './Components/ButtonComponent'
import UsestateHookComponent from './Components/UsestateHookComponent'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ButtonComponent />
        <UsestateHookComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App