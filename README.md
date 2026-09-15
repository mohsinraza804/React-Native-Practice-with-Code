# React Native Class Components

## What is a Class Component?

A **Class Component** is a React component created using a JavaScript class.

It extends `Component` from React:

```js
import React, { Component } from 'react'

class MyComponent extends Component {
  render() {
    return (
      <Text>Hello React Native</Text>
    )
  }
}

export default MyComponent
```

## What Can I Do with Class Components?

With Class Components, we can:

* Create reusable UI components
* Use **state** to store changing data
* Use **props** to receive data from a parent
* Update state using `this.setState()`
* Handle button events
* Pass data from Parent → Child
* Send actions from Child → Parent using callback functions
* Use conditional rendering
* Render lists using `.map()`
* Create interactive applications

## State

State stores data that can change.

```js
this.state = {
  name: 'Raza',
  count: 0
}
```

Update state using:

```js
this.setState({
  name: 'Ali'
})
```

When state changes, the component re-renders.

## Props

Props are used to receive data from a parent component.

Parent:

```jsx
<ChildComponent data="Mohsin" />
```

Child:

```js
this.props.data
```

## Parent → Child

Data can be passed from a parent to a child using props:

```jsx
<StudentDashboard data={this.student} />
```

The child can access it:

```js
this.props.data.name
```

## Child → Parent

A parent can pass a function to the child:

```jsx
<StudentDashboard settoggle={this.toggleStatus} />
```

The child can call that function:

```js
this.props.settoggle()
```

This allows the child to request a state change in the parent.

## Conditional Rendering

We can display different UI based on state or props:

```jsx
{
  this.props.toggle
    ? <Text>Student is Active</Text>
    : <Text>Student is Inactive</Text>
}
```

## Rendering Lists

We can use `.map()` to display arrays:

```jsx
this.props.data.skills.map((skill, index) => (
  <Text key={index}>{skill}</Text>
))
```

## Important Class Component Concepts

```text
Class Component
      ↓
     State
      ↓
   setState()
      ↓
   Re-render
```

And:

```text
Parent
  ↓
 Props
  ↓
Child
  ↓
 Callback Function
  ↓
Parent State Update
```

## What I Practiced

In this project, I practiced:

* Class Components
* Constructor
* `this.state`
* `this.props`
* `this.setState()`
* Props passing
* Parent → Child communication
* Child → Parent communication
* Callback functions
* Conditional rendering
* `.map()`
* Button events
* Styling Class Components
* Creating a Student Profile Dashboard

## Simple Definition

**Class Component is a React component created with a JavaScript class that can manage state, receive props, handle events, and render UI using the `render()` method.**
