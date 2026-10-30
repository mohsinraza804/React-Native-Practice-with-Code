import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'

const PostApiMethod = () => {
    const [data, setdata] = React.useState({ name: '', age: '', email: '', id: '' })

    const formdata = (field, value) => {
        setdata({ ...data, [field]: value });
    }
    const submitHandler = async () => {
        try {
            if (data.name == "" || data.age == "" || data.email == "" || data.id == "") {
                Alert.alert("Fill Form","Enter name email and password");
                return
            }
                const response = await axios.post('http://10.0.2.2:3000/users', data)
                console.log(response.data);
                Alert.alert('Submited', 'your data will successfully submitted')
                setdata({ name: '', age: '', email: '', id: '' })

        } catch (error) {
            Alert.alert('Your data is not submit')
        }
    }

    return (
        <View>
            <Text>PostApiMethod</Text>
            <TextInput
                placeholder='Enter ids'
                onChangeText={(value) => formdata('id', value)}
                style={{ borderColor: 'black' }}
                value={data.id}
            />
            <TextInput
                placeholder='Enter Name'
                onChangeText={(value) => formdata('name', value)}
                value={data.name}
            />
            <TextInput
                placeholder='Enter email'
                onChangeText={(value) => formdata('email', value)}
                value={data.email}
            />
            <TextInput
                placeholder='Enter age'
                onChangeText={(value) => formdata('age', value)}
                value={data.age}
            />

            <Button title='Submit' onPress={submitHandler} />

        </View>
    )
}

export default PostApiMethod