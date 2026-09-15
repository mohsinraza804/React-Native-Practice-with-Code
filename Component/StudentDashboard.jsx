import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export class StudentDashboard extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.heading}>Student Profile</Text>

        <View style={styles.profileCard}>

          <Text style={styles.name}>
            {this.props.data.name}
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{this.props.data.age}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Department</Text>
            <Text style={styles.value}>
              {this.props.data.department}
            </Text>
          </View>

          <Text style={styles.skillHeading}>Skills</Text>

          <View style={styles.skillsContainer}>
            {
              this.props.data.skills.map((skill, index) => (
                <View key={index} style={styles.skillBox}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))
            }
          </View>

          <View style={styles.statusBox}>
            {
              this.props.toggle
                ? <Text style={styles.active}>● Student is Active</Text>
                : <Text style={styles.inactive}>● Student is Inactive</Text>
            }
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title={this.props.toggle ? 'Set Inactive' : 'Set Active'}
              onPress={this.props.settogle}
            />
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    margin: 15,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  profileCard: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 4,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  value: {
    fontSize: 16,
  },

  skillHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  skillBox: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },

  skillText: {
    fontSize: 14,
    fontWeight: '500',
  },

  statusBox: {
    marginTop: 20,
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
  },

  active: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  inactive: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: 5,
  },

})

export default StudentDashboard