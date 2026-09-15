import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import ChildComponnet from './ChildComponnet';
import StudentDashboard from './StudentDashboard'
class ClassComponent extends Component {

    constructor() {
        //This is state in Class COmponent
        super();
        this.state = {
            name: 'Raza',
            toggle: true
        }
    }
    //method to change name
    changeName = () => {
        this.setState({ name: 'Ali' })
    }
    student = {
        name: "Ali Raza",
        age: 24,
        department: "Software Engineering",
        skills: ["React Native", "JavaScript", "Node.js"],
    };
    toggleStatus = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <View>

                <View >
                    <StudentDashboard data={this.student} toggle={this.state.toggle} settogle={this.toggleStatus} />
                </View>
                {/* <View style={styles.Container}>
                    <Text style={{ fontSize: 17, textAlign: 'center', color: 'blue' }}> Class Component </Text>
                    <ChildComponnet data={this.state.name} />
                    <Button title='ChangeName' onPress={this.changeName} />
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        padding: 8,
    }
})

export default ClassComponent
