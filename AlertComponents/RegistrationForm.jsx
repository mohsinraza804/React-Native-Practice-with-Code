
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const RegisterHandler = () => {
    // Prevent duplicate submissions
    if (isSubmitting) {
      return;
    }

    // Validate fields
    if (name.trim() === '' || email.trim() === '' || password === '') {
      Alert.alert(
        'Validation Error',
        'Please enter your name, email and password.',
        [{ text: 'OK' }]
      );
      return;
    }

    // Ask for confirmation
    Alert.alert(
      'Confirm Registration',
      'Are you sure you want to register?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => console.log('Registration Cancelled'),
        },
        {
          text: 'Submit',
          onPress: () => {
            setIsSubmitting(true);

            // Simulate registration processing
            setTimeout(() => {
              Alert.alert(
                'Registered',
                'You are successfully registered! Congratulations.',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      setName('');
                      setEmail('');
                      setPassword('');
                      setIsSubmitting(false);
                    },
                  },
                ],
                { cancelable: false }
              );
            }, 1000);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Form</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        onPress={RegisterHandler}
        disabled={isSubmitting}
        style={[
          styles.registerButton,
          isSubmitting && styles.disabledButton,
        ]}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? 'Submitting...' : 'Register'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  registerButton: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegistrationForm;
