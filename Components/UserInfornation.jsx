import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const UserInformation = (props) => {
  return (
    <View>

      <Text style={styles.heading}>
        User Information
      </Text>

      <Text style={styles.label}>Profession</Text>
      <Text style={styles.text}>
        {props.userInfo.profession}
      </Text>

      <Text style={styles.label}>Development Skills</Text>
      <Text style={styles.text}>
        {props.userInfo.developmentSkills.join(' • ')}
      </Text>

      <Text style={styles.label}>About</Text>
      <Text style={styles.text}>
        {props.userInfo.description}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B3954',
    marginBottom: 15,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#168AAD',
    marginTop: 8,
  },

  text: {
    fontSize: 16,
    color: '#444',
    marginTop: 3,
    lineHeight: 23,
  },
});

export default UserInformation;