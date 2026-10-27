
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';

const TaskManagement = () => {
    const [taskName, setTaskName] = useState('');
    const [status, setStatus] = useState('Pending');
    const [isCompleted, setIsCompleted] = useState(false);

    const CompleteTaskHandler = () => {
        // Step 1: Validate task name
        if (taskName.trim() === '') {
            Alert.alert(
                'Validation Error',
                'Please enter a task name.',
                [{ text: 'OK' }]
            );
            return;
        }

        // Step 2: Ask for confirmation
        Alert.alert(
            'Complete Task',
            `Are you sure you want to complete "${taskName}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => console.log('Task completion cancelled')
                },
                {
                    text: 'Complete',
                    onPress: () => {
                        // Step 3: Update task status
                        setStatus('Completed');
                        setIsCompleted(true);

                        // Step 4: Show success alert
                        Alert.alert(
                            'Success',
                            'Your task has been completed successfully!',
                            [{ text: 'OK' }]
                        );
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Task Management</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your task name"
                value={taskName}
                onChangeText={setTaskName}
                editable={!isCompleted}
            />

            <View style={styles.statusBox}>
                <Text style={styles.statusLabel}>Task Status:</Text>
                <Text
                    style={[
                        styles.status,
                        isCompleted && styles.completedStatus
                    ]}
                >
                    {status}
                </Text>
            </View>

            <TouchableOpacity
                style={[
                    styles.button,
                    isCompleted && styles.disabledButton
                ]}
                onPress={CompleteTaskHandler}
                disabled={isCompleted}
            >
                <Text style={styles.buttonText}>
                    {isCompleted ? 'Task Completed' : 'Complete Task'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f6f8'
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#222'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 14,
        marginBottom: 20,
        fontSize: 16
    },
    statusBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8
    },
    statusLabel: {
        fontSize: 17,
        fontWeight: '600'
    },
    status: {
        fontSize: 17,
        color: '#e69500',
        fontWeight: 'bold'
    },
    completedStatus: {
        color: 'green'
    },
    button: {
        backgroundColor: '#1976d2',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    disabledButton: {
        backgroundColor: '#888'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default TaskManagement;
