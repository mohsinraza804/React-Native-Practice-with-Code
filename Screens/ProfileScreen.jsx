
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.avatar}>👤</Text>

        <Text style={styles.name}>Mohsin Raza</Text>
        <Text style={styles.role}>Software Engineer</Text>

        <View style={styles.divider} />

        <View style={styles.info}>
          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.value}>mohsin@example.com</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.value}>+92 300 1234567</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Lahore, Pakistan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 4,
  },
  avatar: {
    fontSize: 65,
    backgroundColor: '#DBEAFE',
    borderRadius: 60,
    padding: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  role: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    width: '100%',
    marginVertical: 20,
  },
  info: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: '#64748B',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 5,
  },
});

export default ProfileScreen;
