import { View, Text, TextInput, Alert, Button } from 'react-native'
import React from 'react'
import axios from 'axios';

const PutApiMethod = () => {
    const [data, setData] = React.useState({ name: '', email: '', id: '' , age: '' });
    const datahandler = (field, value) => {
        setData({ ...data, [field]: value })
    }
    const submitHandler = async () => {
        try {
            if (data.name == '' || data.email == '' || data.id == '' ||  data.age == '') {
                Alert.alert("Fill", "please your Form Filled")
                return;
            }
            const response = await axios.put(`http://10.0.2.2:3000/users/${data.id}`, {
                name: data.name,
                email: data.email,
                age: data.age,
            });
            setData({ name: '', email: '', id: '' , age: '' });
        } catch (error) {
            Alert.alert('Your data is not submit')
        }
    }
    return (
        <View>
            <Text>PutApiMethod</Text>
            <TextInput
                placeholder='Enter id'
                value={data.id}
                onChangeText={(value) => datahandler('id', value)}
            />
            <TextInput
                placeholder='Enter Name'
                value={data.name}
                onChangeText={(value) => datahandler('name', value)}
            />
            <TextInput
                placeholder='Enter Email'
                value={data.email}
                onChangeText={(value) => datahandler('email', value)}
            />
            <TextInput
                placeholder='Enter age'
                value={data.age}
                onChangeText={(value) => datahandler('age', value)}
            />
            <Button title='Update' onPress={submitHandler} />
        </View>
    )
}

export default PutApiMethod