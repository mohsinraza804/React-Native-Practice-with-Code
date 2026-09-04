import { View, Text, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import ProductComponent from './ProdunctComponent';
import PropsComponent from './PropsComponent';

const UsestateHookComponent = () => {
  const [name, setName] = useState("Raza");
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <View style={{ margin: 20, padding: 20, borderWidth: 1, borderColor: "black" }}>

      {/* <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>UsestateHook</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>{name}</Text>
      <Text style={{ fontSize: 16, alignSelf: "center" }}>Count: {count}</Text> */}
      
      {/* passing props to PropsComponent */}
      <PropsComponent data={count} name={name} /> 

      <View style={{ gap: 10, marginTop: 10 }}>
        <Button title="Press Me to Change Name" onPress={() => setName("Ali Raza")} />
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Reset" onPress={() => setCount(0)} />
        <Button title="Decrement" onPress={() => setCount(count <= 0 ? 0 : count - 1)} />
      </View>

      <ProductComponent />

    </View>
  )
}

export default UsestateHookComponent