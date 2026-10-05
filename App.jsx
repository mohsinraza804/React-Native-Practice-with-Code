import { View, Text, TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef ,useState } from 'react'
import SearchScreenRef from './Components/SearchScreenRef'
const App = () => {
  const [value, setValue] = useState();
  const name = useRef();
  const handleSubmit = () => {
    name.current.focus();
    name.current.setNativeProps({
      text: 'ALi',
      backgroundColor: 'red',
    })
    setValue(name.current.value);
  }
  return (
    // <View>
    //   <Text>UseRef Hook</Text>
    //   <TextInput
    //     placeholder='Enter your name'
    //     ref={name}
    //     style={{borderWidth: 1, borderColor: 'black', margin: 10, padding: 10}}
    //     value={value}
    //   />
    //   <TouchableOpacity onPress={handleSubmit}>
    //     <Text style={{textAlign: 'center', backgroundColor: 'blue', color: 'white', padding: 10, margin: 10}}>Submit</Text>

    //   </TouchableOpacity>
    //     <Text style={{textAlign: 'center', margin: 10}}>Value: {value}</Text>

    // </View>
    <SearchScreenRef />
  )
}

export default App