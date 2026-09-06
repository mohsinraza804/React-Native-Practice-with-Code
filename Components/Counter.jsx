import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CounterButton from './CounterButton';

const Counter = (props) => {

  const handleIncrement = () => {
    props.setCount(props.count + 1);
  };

  const handleDecrement = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1);
    }
  };

  const handleReset = () => {
    props.setCount(0);
  };

  return (
    <View>

      <Text style={styles.heading}>
        Counter
      </Text>

      <Text style={styles.count}>
        {props.count}
      </Text>

      <CounterButton
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B3954',
    textAlign: 'center',
    marginBottom: 10,
  },

  count: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#168AAD',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default Counter;