import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native'
import React from 'react'

const LoginForm = () => {
    const [visible, setVisible] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [secureText, setSecureText] = React.useState(true);
    const loginhandler = () => {
        if (username === '' || password === '') {
            setError('Please enter username and password');
            return;
        }
        setError('');
        console.log('Username:', username);
        console.log('Password:', password);
        setSuccess(true);
        setTimeout(() => {
            setVisible(false);
            setSuccess(false);
            setError('');
            setPassword('');
            setUsername('');
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LoginForm</Text>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Modal visible={visible} transparent={true} animationType='slide' onRequestClose={() => setVisible(false)}>
                <View style={styles.Modalcontainer}>

                    <View style={styles.content}>
                        <Text style={styles.title}>Login</Text>
                        <View>
                            <TextInput
                                placeholder="Username"
                                onChangeText={(text) => setUsername(text)}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={secureText}
                                style={styles.input}
                            />
                            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={{ margin: 10 }}>
                                <Text style={{ color: 'blue' }}>{secureText ? 'Show Password' : 'Hide Password'}</Text>
                            </TouchableOpacity>
                        </View>
                        {error ? <Text style={styles.error}>{error}</Text> : null}
                        {success ? <Text style={styles.success}>Login Successful</Text> : null}
                        <TouchableOpacity onPress={loginhandler} style={styles.submitButton}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F8',
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#202544',
        textAlign: 'center',
        marginVertical: 20,
    },

    button: {
        backgroundColor: '#5B5FEF',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 12,
        elevation: 4,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    Modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        padding: 20,
    },

    content: {
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 24,
        width: '100%',
        maxWidth: 400,
        borderWidth: 1,
        borderColor: '#E8EAF3',
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.18,
        shadowRadius: 15,
    },

    error: {
        color: '#DC2626',
        backgroundColor: '#FEF2F2',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },

    success: {
        color: '#15803D',
        backgroundColor: '#F0FDF4',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },

    submitButton: {
        backgroundColor: '#5B5FEF',
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 18,
        marginHorizontal: 10,
        elevation: 3,
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D8DCE8',
        backgroundColor: '#F9FAFF',
        borderRadius: 12,
        margin: 10,
        paddingHorizontal: 12,
    },

    passwordInput: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color: '#202544',
    },

    input: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#D8DCE8',
        backgroundColor: '#F9FAFF',
        padding: 14,
        borderRadius: 12,
        fontSize: 16,
        color: '#202544',
    },
});

export default LoginForm