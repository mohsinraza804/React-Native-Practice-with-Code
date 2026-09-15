import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class ChildComponnet extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 17 , textAlign: 'center', color: 'red', margin: 10}}> Child Component </Text>
        <Text style={{fontSize: 17 , textAlign: 'center', fontWeight: 'bold'}}> Name: {this.props.data}</Text>
      </View>
    )
  }
}

export default ChildComponnet
