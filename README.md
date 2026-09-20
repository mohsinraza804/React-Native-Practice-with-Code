# React Native Pressable Component

This project demonstrates the React Native `Pressable` component and its common press events.

## What is Pressable?

`Pressable` is used to detect user interactions such as normal press, pressing in, releasing, and long press.

## Events Used

- `onPress` – runs when the button is pressed and released.
- `onPressIn` – runs when the user touches the button.
- `onPressOut` – runs when the user releases the button.
- `onLongPress` – runs when the user holds the button.
- `delayLongPress` – sets the time required for a long press.

Example:

```jsx
<Pressable
  style={styles.button}
  onPress={onPressHandler}
  onPressIn={onPressInHandler}
  onPressOut={onPressOutHandler}
  onLongPress={onLongPressHandler}
  delayLongPress={1000}
>
  <Text>Press Me</Text>
</Pressable>
