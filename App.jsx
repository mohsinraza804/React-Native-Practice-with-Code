import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import IndicaterComponent from './Components/IndicaterComponents'
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from './Components/LoginForm'
const App = () => {
  const [toggle, settoggel] = useState(true);
  return (
    <SafeAreaProvider>
        
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Activity Indicater</Text>
        {/* <ActivityIndicator/> */}
        <TouchableOpacity onPress={() => settoggel(!toggle)} style={styles.button} activeOpacity={0.5}>
          <Text style={styles.Buttontext}>{toggle ? "HideLoader" : "showLoader"}</Text>

        </TouchableOpacity>

        {
          toggle && (
            <IndicaterComponent />
          )
        }
        <LoginForm/>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  heading:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  button:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    borderColor: 'black', 
    marginHorizontal: 50
  },
  Buttontext:{
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 20
  }
})

export default App