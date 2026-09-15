import { View, Text } from 'react-native'
import React from 'react'
import ClassComponent from './Component/ClassComponent'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{marginTop: 20}}>
        <ClassComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App