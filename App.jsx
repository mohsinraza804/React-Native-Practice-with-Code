import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard'
const App = () => {
  const [count, setCount] = useState(1);
  const [score, setscore] = useState(10);
  const [togle, setTogle] = useState(true);
  const counthandler = () => {
    setCount(count + 1);
  }
  const scorehandler = () => {
    setscore(score + 10);
  }
  // useEffect(() => {
  //   console.log(`Increment in count and score`)
  // }, [count, score])

  // useEffect(() => {
  //   console.log(`Increment `)
  // }, [])

  useEffect(() => {
    console.log(`Increment in count `)
  }, [count])

  useEffect(() => {
    console.log(`Increment in score`)
  }, [score])

  return (
    <View style={{flex: 1}}>
      <Text>Use Effect Hook</Text>
      <Text>Count: {count}</Text>
      <Text>Score: {score}</Text>
      <Button title='Increment Count' onPress={counthandler} />
      <Button title='Increment Score' onPress={scorehandler} />
      <Button title={(togle) ? 'Hide Child Component' : 'Show Child Component'} onPress={() => setTogle(!togle)} />
      {
        togle ?
          <ChildComponent /> : null
      }
      <Dashboard/>

    </View>
  )
}

const ChildComponent = () => {
  useEffect(() => {
    return () => {
      console.log('Unmount the component')
    }
  })
  return (
    <View>
      <Text style={{fontSize: 20, margin: 10, padding: 10, textAlign: 'center', fontWeight: 'bold', borderRadius: 10, borderWidth: 2, borderColor: 'black'}}>Child Component</Text>
    </View>
  )
}

export default App