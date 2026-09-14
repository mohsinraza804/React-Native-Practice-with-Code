import { View, Text } from 'react-native'
import React from 'react'
import GridViewComponent from './Components/GridViewComponent'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Components/stylsheet'
import ProductComponent from './Components/ProductComponent'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.heading}>Grid View</Text>
        {/* <GridViewComponent /> */}
        <ProductComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App