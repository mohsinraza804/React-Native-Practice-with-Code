import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SeacrhableFlatList from './Components/SearchableFlatList'
import PullToReferesh from './Components/PullToReferesh'
import Loadmore from './Components/Loadmore'
import MiniEcommerce from './MiniEcommerce'
import ListinSection from './SectionListComponents/ListinSection';
import StudentCourseSectionList from './SectionListComponents/StudentCourseSectionLIst'
const App = () => {

  const fruit = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'mango' },
    { id: 4, name: 'orange' },
    { id: 5, name: 'grapes' },
    { id: 6, name: 'watermelon' },
    { id: 7, name: 'pineapple' },
    { id: 8, name: 'strawberry' },
    { id: 9, name: 'papaya' },
    { id: 10, name: 'guava' },
  ];

  const renderitem = ({ item }) => (
    <View>
      <Text style={styles.text} >Fruit: {item.name}</Text>
    </View>
  )

  return (
    <SafeAreaProvider style={{ backgroundColor: '#192d5a', }}>

      <SafeAreaView>

        <ScrollView>

          <StudentCourseSectionList />

          {/* <ListinSection /> */}


          {/* <MiniEcommerce /> */}

          {/* 
          <View>
            <FlatList
              data={fruit}
              renderItem={renderitem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.container}
            />
          </View>

          <SeacrhableFlatList />

          <PullToReferesh />
          <Loadmore/> */}
        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'yellow',
    marginHorizontal: 20
  },
  text: {
    textAlign: 'center',
    backgroundColor: "#fa8e8e",
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  }

})

export default App