import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const loadingHandler = () => {

    // Validation
    if (name.trim() === '' || password.trim() === '') {
      setMessage('Please enter name and password')
      return
    }
    setLoading(true)
    setMessage('')

    // Stop loading after 3 seconds
    setTimeout(() => {
      setLoading(false)
      setMessage('Login Successfully!')
    }, 3000)
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          Login Form
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Name
          </Text>

          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Message */}
        {message !== '' && (
          <Text style={styles.message}>
            {message}
          </Text>
        )}

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.button,
            loading && styles.disabledButton
          ]}
          onPress={loadingHandler}
          disabled={loading}
        >

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="small"
                color="white"
              />

              <Text style={styles.buttonText}>
                Loading...
              </Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>
              Login
            </Text>
          )}

        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,

    elevation: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222',
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },

  button: {
    height: 50,
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#888',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  message: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },

})

export default LoginForm