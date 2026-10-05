# React Native useRef Hook Practice

This project is a practice of the **useRef Hook** in React Native.

## What is useRef?

`useRef` is a React Hook used to **store a value between renders without causing the component to re-render**.

It is also commonly used to directly access a component, such as focusing or clearing a `TextInput`.

### Syntax

```jsx
const myRef = useRef(initialValue);
```

The stored value is accessed using:

```jsx
myRef.current
```

## What I Learned

* What is `useRef`
* How to use `useRef`
* How to access `.current`
* Using `useRef` with `TextInput`
* Automatically focusing an input
* Clearing an input using `useRef`
* Storing values without causing a re-render
* Using `useRef` with `useState`

## Main Example

```jsx
const inputRef = useRef(null);

inputRef.current.focus();
inputRef.current.clear();
```

## Project

### Search Users App

Features:

* Search users
* Clear search
* Auto-focus TextInput
* Count searches using `useRef`
* Display search results

## Key Concept

`useRef` does **not** cause a re-render when its value changes.

```jsx
const countRef = useRef(0);

countRef.current++;
```

If the UI needs to update, `useState` can be used to trigger the re-render.

## Technologies

* React Native
* JavaScript
* React Hooks
* `useRef`
* `useState`
* `useEffect`
* `FlatList`
