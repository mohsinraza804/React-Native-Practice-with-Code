import {View,Text,SectionList,StyleSheet,} from 'react-native';
import React from 'react';


const data = [
  {
    title: 'Fruits',
    data: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Mango' },
    ],
  },

  {
    title: 'Vegetables',
    data: [
      { id: 4, name: 'Potato' },
      { id: 5, name: 'Tomato' },
      { id: 6, name: 'Carrot' },
    ],
  },

  {
    title: 'Drinks',
    data: [
      { id: 7, name: 'Coke' },
      { id: 8, name: 'Pepsi' },
      { id: 9, name: 'Juice' },
    ],
  },

  {
    title: 'Fast Food',
    data: [
      { id: 10, name: 'Burger' },
      { id: 11, name: 'Pizza' },
      { id: 12, name: 'Fries' },
    ],
  },

  {
    title: 'Desserts',
    data: [
      { id: 13, name: 'Ice Cream' },
      { id: 14, name: 'Cake' },
      { id: 15, name: 'Donut' },
    ],
  },
];

const datahandler = ({ item }) => (
  <View style={styles.item}>

    <Text style={styles.itemText}>
      {item.name}
    </Text>

  </View>
);

const titlehandler = ({ section }) => (
  <View style={styles.sectionHeader}>

    <Text style={styles.sectionTitle}>
      {section.title}
    </Text>

  </View>
);

const ListinSection = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
         Food Categories
      </Text>

      <SectionList
        sections={data}

        renderItem={datahandler}

        renderSectionHeader={titlehandler}

        keyExtractor={(item) =>
          item.id.toString()
        }

        // showsVerticalScrollIndicator={false}
      />

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',

    color: '#FFFFFF',

    textAlign: 'center',

    paddingVertical: 15,
  },

  sectionHeader: {
    backgroundColor: '#3d60a1',

    paddingVertical: 12,
    paddingHorizontal: 16,

    marginTop: 10,
    marginBottom: 8,

    borderRadius: 14,

    elevation: 6,

    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },


  sectionTitle: {
    fontSize: 19,

    fontWeight: 'bold',

    color: '#FFFFFF',
  },


  item: {
    backgroundColor: '#32436b',

    paddingVertical: 14,
    paddingHorizontal: 16,

    marginBottom: 8,

    borderRadius: 13,

    borderWidth: 1,
    borderColor: '#263449',

    elevation: 3,
  },


  itemText: {
    fontSize: 17,

    fontWeight: '600',

    color: '#E2E8F0',
  },

});

export default ListinSection;
