
import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Getapi = () => {
  const [data, setdata] = useState([]);
  //Fetch method which is old
  // useEffect(() => {
  //   fetch('http://10.0.2.2:3000/department')
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setdata(result);
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log('API Error:', error);
  //     });
  // }, []);


  //axios method
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((result) => {
        console.log(result.data);
        setdata(result.data)
      })
  }, [])
  return (
    <View>
      <Text>API Handling</Text>
      <ScrollView>

        {data.map((item) => (
          <View key={item.id} style={{ margin: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Getapi;
