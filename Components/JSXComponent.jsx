import { View, Text } from 'react-native'
import React from 'react'

const JSXComponent = () => {
    let name = "Mohsin Raza"
    let age = 25
    let skills = ['React Native', 'JavaScript', 'Node.js']
    let address = {
        street: '123 Main Street',
        city: 'City',
        country: 'Pakistan'
    }
    let isStudent = true
    let hobbies = ['Coding', 'Reading', 'Traveling']
    let education = {
        degree: 'Bachelor of Science in Computer Science',
        university: 'University of XYZ',
        graduationYear: 2022,
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 20 }}>

            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
                Practicing JSX Component
            </Text>

            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 15 }}>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Name: <Text style={{ fontWeight: 'normal' }}>{name}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Age: <Text style={{ fontWeight: 'normal' }}>{age}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Skills: <Text style={{ fontWeight: 'normal' }}>{skills.join(', ')}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Address: <Text style={{ fontWeight: 'normal' }}>{address.street}, {address.city}, {address.country}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Is Student: <Text style={{ fontWeight: 'normal' }}>{isStudent ? 'Yes' : 'No'}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Hobbies: <Text style={{ fontWeight: 'normal' }}>{hobbies.join(', ')}</Text>
                </Text>

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Education: <Text style={{ fontWeight: 'normal' }}>{education.degree}, {education.university}, {education.graduationYear}</Text>
                </Text>

            </View>
        </View>
    )
}

export default JSXComponent

