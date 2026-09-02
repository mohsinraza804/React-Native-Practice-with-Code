import { View, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://imgcdn.stablediffusionweb.com/2024/10/17/7e7d0840-721f-4bd6-a823-668803318b7c.jpg' }}
        style={{ width: 180, height: 180, alignSelf: 'center', margin: 15, borderRadius: 90, borderWidth: 4, borderColor: 'white' }}
      />
    </View>
  )
}

export default ImageComponent