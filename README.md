# React Native Dialog Box

## What Is a Dialog Box?
A dialog box is a popup that displays information or asks the user to perform an action.

## Why Do We Use It?
- To show success or error messages.
- To confirm actions, such as deleting an item.
- To collect information without leaving the screen.
- To create popup forms.

## 1. Modal Syntax

```jsx
const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  transparent={true}
  onRequestClose={() => setVisible(false)}
>
  <View>
    <Text>Hello! This is my Dialog Box.</Text>
  </View>
</Modal>
```

**Why?** `Modal` displays a popup. `visible` controls whether it is open or closed.

## 2. Open and Close Modal

```jsx
// Open
setVisible(true);

// Close
setVisible(false);
```

**Why?** We use state to control the visibility of the popup.

## 3. Move to the Next Step

```jsx
const [step, setStep] = useState(1);

const nextStep = () => {
  setStep(step + 1);
};
```

**Why?** It updates the current step in a multi-step form.

## 4. Display Items Using map()

```jsx
{[1, 2, 3].map((item) => (
  <Text key={item}>{item}</Text>
))}
```

**Output:** `1`, `2`, `3`

**Why?** `map()` creates repeated UI elements without writing each one separately.

## 5. Conditional Rendering

```jsx
{step === 1 && <Text>Enter Your Name</Text>}
{step === 2 && <Text>Enter Your Email</Text>}
```

**Why?** It displays different content depending on the current step.

## What I Practiced
- `Modal` to display popups.
- `useState` to manage state.
- `onPress` to handle button clicks.
- `TextInput` to collect user information.
- `map()` to display progress steps.
- Conditional rendering and input validation.
- A multi-step registration form.

## Practice Questions
1. What is a Dialog Box?
2. Why do we use `Modal`?
3. What does `visible` do?
4. Why do we use `useState`?
5. What does `map()` do?
6. What is conditional rendering?


# React Native Alert

## What is Alert?

`Alert` is a built-in React Native API used to display a popup message on the screen. It can show information, warnings, errors, and confirmation messages.

## Syntax

```jsx
Alert.alert(
  'Title',
  'Message',
  [
    { text: 'Cancel', onPress: () => console.log('Cancelled') },
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ],
  { cancelable: false }
);
```

## What I Practiced

- Displaying an alert when a button is pressed.
- Using alert titles and messages.
- Creating multiple buttons, such as Yes, No, OK, and Cancel.
- Handling button clicks using `onPress`.
- Asking for confirmation before completing an action.
- Validating form inputs with alerts.
- Showing success and error messages.
- Using `setTimeout()` to delay an alert.
- Preventing repeated actions by disabling a button.
- Managing task status with `useState`.

## Mini Projects

1. Delete Confirmation
2. Exit Confirmation
3. Registration Form Validation
4. Task Completion Confirmation
5. Login Validation
6. Reset Counter Confirmation

## Important Notes

- Import Alert from `react-native`.
- Use `Alert.alert(title, message, buttons, options)`.
- Use `onPress` to handle a button click.
- Use `cancelable` to control whether an Android alert can be dismissed by tapping outside it or pressing Back.
- Alerts display messages; they do not automatically perform actions such as closing the app or deleting data.

## Example Import

```jsx
import { Alert } from 'react-native';
```

## Learning Goal

Understand how to use alerts to display messages, validate user input, request confirmation, and handle user actions in React Native.