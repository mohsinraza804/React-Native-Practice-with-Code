import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const CounterButton = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={props.onIncrement}
          color="#168AAD"
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={props.onDecrement}
          color="#168AAD"
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={props.onReset}
          color="#0B3954"
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default CounterButton;