import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import axios from 'axios';

const PatchApiMethod = () => {
    const [formdata, setFormdata] = React.useState({ id: '', name: '', age: '', email: '' });
    const data = (field, value) => {
        setFormdata({ ...formdata, [field]: value })
    }
    const updatedata = async () => {
        try {
            if (formdata.name == "" && formdata.id == '' && formdata.age == '' && formdata.email == '') {
                Alert.alert('Fill Form', 'Fill Form')
                return;
            }
            const response = await axios.patch(`http://10.0.2.2:3000/users/${formdata.id}`, {
                ...formdata.name && { name: formdata.name },
                ...formdata.age && { age: formdata.age },
                ...formdata.email && { email: formdata.email }
            })
            Alert.alert('Successfull', 'Data Will Updated Succesfully')


        } catch (error) {
            Alert.alert('Error:', 'Your data not Updated')
        }
    }
    return (
        <View>
            <Text>PatchApiMethod</Text>
            <TextInput
                placeholder='Enter id'
                onChangeText={(value) => data('id', value)}
            />
            <TextInput
                placeholder='Enter name'
                onChangeText={(value) => data('name', value)}
            />
            <TextInput
                placeholder='Enter email'
                onChangeText={(value) => data('email', value)}
            />
            <TextInput
                placeholder='Enter age'
                onChangeText={(value) => data('age', value)}
            />

            <Button title='Update' onPress={updatedata} />
        </View>
    )
}

export default PatchApiMethod