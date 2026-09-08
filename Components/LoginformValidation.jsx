import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const LoginformValidation = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setpassworderror] = useState('');
    const [succes, setsucces] = useState('');

    const handlelogin = () => {

        // Clear previous errors
        setEmailerror('');
        setpassworderror('');
        setsucces('');

        let valid = true;

        // Password validation
        if (password.length === 0) {
            setpassworderror('Password cannot be empty');
            valid = false;
        }
        else if (password.length < 6) {
            setpassworderror('Password must contain at least 6 characters');
            valid = false;
        }

        // Email validation
        if (email.length === 0) {
            setEmailerror('Email cannot be empty');
            valid = false;
        }
        else if (!email.includes('@')) {
            setEmailerror('Email must contain @');
            valid = false;
        }

        // Login successful
        if (valid) {
            setsucces('Login Successful');
            Alert.alert('Success', 'Successful Login');
        }
    };

    return (
        <View
            style={{
                margin: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 15,
            }}>

            <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center',marginBottom: 20,}}>Login Form</Text>

            <TextInput
                placeholder="Enter Email"
                onChangeText={(value) => setemail(value)}
                value={email}
                keyboardType="email-address"
                style={{
                    fontSize: 15,
                    borderWidth: 2,
                    borderColor: 'black',
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10,
                }} />

            {emailerror !== '' && (
                <Text style={{color: 'red',marginTop: 5,marginBottom: 5,}}> {emailerror} </Text>
            )}

            <TextInput
                placeholder="Enter Password"
                onChangeText={(value) => setpassword(value)}
                value={password}
                secureTextEntry={true}
                style={{
                    fontSize: 15,
                    borderWidth: 2,
                    borderColor: 'black',
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,
                }}
            />

            {passworderror !== '' && (
                <Text style={{ color: 'red', marginTop: 5, marginBottom: 10, }} > {passworderror} </Text>
            )}

            <Button title="Login" onPress={handlelogin}  />

            {succes !== '' && (
                <Text style={{ color: 'green',fontSize: 18,fontWeight: 'bold',textAlign: 'center',marginTop: 15,}}> {succes}</Text>
            )}

        </View>
    );
};

export default LoginformValidation;

