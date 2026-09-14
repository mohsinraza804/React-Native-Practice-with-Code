import { View, Text,  } from 'react-native'
import React from 'react'
import ContactScreen from './Screens/ContactScreen'
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <ContactScreen />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App