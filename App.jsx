import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import NameComponent from './Components/NameComponent'
import ImageComponet from './Components/ImageComponent'
import ContactInfoComponent from './Components/ContactInfoComponent'
import AboutMeComponent from './Components/AboutmeComponent'
import JSXComponent from './Components/JSXComponent'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f4f7' }}>
        <ScrollView>
          <Text style={{ margin: 15, alignSelf: 'center', fontWeight: 'bold', fontSize: 24, color: '#222' }}>
            Welcome To My Profile
          </Text>

          <ImageComponet />
          <NameComponent />
          <AboutMeComponent />
          <ContactInfoComponent />
          {/* <JSXComponent /> */}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App