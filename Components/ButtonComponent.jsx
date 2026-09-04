import { View, Text , Button } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    let name = "ButtonComponent"
    const handlePress = () => {
        name = "Button Pressed";
        alert(name);
    }
  return (
    <View>
      <Text style={{alignSelf: "center", fontWeight: "bold"}}>{name}</Text>
      <Button  title="Press Me"  onPress={() => handlePress()}/>
      
    </View>
  )
}

export default ButtonComponent