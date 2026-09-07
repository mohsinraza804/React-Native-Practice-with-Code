import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const LiveCharacterCounter = () => {

  const [character, setCharacter] = useState('');

  return (
    <View style={{
      margin: 20,
      padding: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      backgroundColor: '#f5f5f5',
    }}>

      <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }} >LiveCharacterCounter</Text>


      <TextInput
        placeholder='Enter text'
        value={character}
        onChangeText={(value) => setCharacter(value)}
        style={{ fontSize: 15, borderWidth: 2, borderColor: 'black', padding: 10, borderRadius: 10, marginTop: 10 }}
      />

      <Text style={{ fontSize: 18, marginTop: 20, }}>Name: {character}</Text>

      {
        (character.length > 20) ? (
          <Text style={{ color: 'red', fontSize: 18, marginTop: 20 }}>Character limit exceeded</Text>
        ) : (character && character.length < 4) ? (
          <Text style={{ color: 'red', fontSize: 18, marginTop: 20 }}>Character limit not met</Text>
        ) : (character.length == 0) ? null
          : <Text style={{ color: 'green', fontSize: 18, marginTop: 20 }}>Valid Character</Text>
      }

    </View>
  )
}

export default LiveCharacterCounter