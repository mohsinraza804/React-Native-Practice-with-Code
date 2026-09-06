import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TodoItems from './TodoItems';

const TodoListProps = (props) => {

  const deleteTodo = (id) => {
    const updatedTodo = props.Todo.filter(
      (todo) => todo.id !== id
    );

    props.setTodo(updatedTodo);
  };

  return (
    <View>

      <Text style={styles.heading}>
        Todo List
      </Text>

      {props.Todo.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B3954',
    marginBottom: 12,
  },
});

export default TodoListProps;