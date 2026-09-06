import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const UserProfile = (props) => {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {props.userInfo.name}
      </Text>

      <Text style={styles.info}>
        Age: {props.userInfo.age}
      </Text>

      <Text style={styles.info}>
        {props.userInfo.email}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    backgroundColor: '#88cce9',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3954',
    marginBottom: 5,
  },

  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
  },
});

export default UserProfile;