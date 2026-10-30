import { View, Text, Alert,TextInput,Button } from 'react-native'
import React from 'react'
import axios from 'axios';

const DeleteApiMethod = () => {
    const [id,setId] = React.useState("");
    const deleteHandler = async () => {
        try {
            if(id==""){
                Alert.alert("Fill:" , 'Fill your form');                
                return
            }
            await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            Alert.alert("Deleted:" , 'Your data will be deleted Sucessfully')
            setId("")
        } catch (error) {
            Alert.alert("Error:" , 'Your data will not deleted')
        }
    }
  return (
    <View>
      <Text>DeleteApiMethod</Text>
      <TextInput
      placeholder='Enter Id'
      onChangeText={(value)=>setId(value)}
      value={id}
      />
      <Button title='Delete' onPress={deleteHandler} />
    </View>
  )
}

export default DeleteApiMethod