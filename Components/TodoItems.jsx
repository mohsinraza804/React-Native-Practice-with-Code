import { View, Button, Text, StyleSheet } from 'react-native';
import React from 'react';

const TodoItems = (props) => {
  return (
    <View style={styles.item}>

      <Text style={styles.task}>{props.todo.task}</Text>

      <Button
        onPress={() => props.deleteTodo(props.todo.id)}
        title="Delete" color="#ef6565" />

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F2FAFD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#D6EEF7',
  },

  task: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
});

export default TodoItems;