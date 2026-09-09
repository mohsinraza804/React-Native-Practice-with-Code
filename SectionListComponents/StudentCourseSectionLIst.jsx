import { View, Text, SectionList  , StyleSheet} from 'react-native'
import React from 'react'


const StudentCourseSectionLIst = () => {
    const courses = [
        {
            title: 'Computer Science',
            data: [
                { id: 1, name: 'Computer Networks', teacher: 'Mr. Ali' },
                { id: 2, name: 'Operating Systems', teacher: 'Mr. Ahmed' },
                { id: 3, name: 'Database Systems', teacher: 'Ms. Sara' },
                { id: 4, name: 'Software Engineering', teacher: 'Mr. Hamza' },
                { id: 5, name: 'Computer Architecture', teacher: 'Ms. Ayesha' },
            ],
        },

        {
            title: 'Mathematics',
            data: [
                { id: 6, name: 'Calculus', teacher: 'Mr. Usman' },
                { id: 7, name: 'Linear Algebra', teacher: 'Ms. Fatima' },
                { id: 8, name: 'Discrete Mathematics', teacher: 'Mr. Hassan' },
                { id: 9, name: 'Probability', teacher: 'Ms. Sana' },
                { id: 10, name: 'Statistics', teacher: 'Mr. Bilal' },
            ],
        },

        {
            title: 'English',
            data: [
                { id: 11, name: 'English Grammar', teacher: 'Ms. Hina' },
                { id: 12, name: 'Communication Skills', teacher: 'Mr. Ahmed' },
                { id: 13, name: 'Academic Writing', teacher: 'Ms. Sara' },
                { id: 14, name: 'Technical Writing', teacher: 'Mr. Ali' },
                { id: 15, name: 'Presentation Skills', teacher: 'Ms. Ayesha' },
            ],
        },

        {
            title: 'Programming',
            data: [
                { id: 16, name: 'C++ Programming', teacher: 'Mr. Hamza' },
                { id: 17, name: 'Java Programming', teacher: 'Mr. Usman' },
                { id: 18, name: 'Python Programming', teacher: 'Ms. Fatima' },
                { id: 19, name: 'JavaScript', teacher: 'Mr. Hassan' },
                { id: 20, name: 'React Native', teacher: 'Mr. Bilal' },
            ],
        },
    ];

const datahandler = ({ item }) => (
  <View style={styles.item}>

    <Text style={styles.itemText}>
      {item.teacher} 
    </Text>
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

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>StudentCourseSectionLIst</Text>

            <SectionList
            sections={courses}
            renderItem={datahandler}
            renderSectionHeader={titlehandler}
            keyExtractor={(item)=>item.id}

            />

        </View>
    )
}
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
    textAlign: 'center',
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
export default StudentCourseSectionLIst