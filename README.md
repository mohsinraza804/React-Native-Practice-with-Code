## What is FlatList?

`FlatList` is a React Native component used to **display data from an array as a list**.

It takes an **array** as input and renders each item on the screen.

**Simple flow:**

`Array → FlatList → List Items`

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

FlatList displays these array items as a list on the mobile screen.

It is useful for displaying **large lists efficiently**.
# Mini E-Commerce App

A simple React Native mini e-commerce app created for practicing **FlatList, useState, search, filtering, and cart functionality**.

## What I Can Do

* 🔍 Search products by name or category
* 🏷️ Filter products by category
* 🛒 Add and remove products from cart
* 💰 Calculate total cart price
* 🔄 Pull to refresh products
* 📜 Load more products
* 📱 Display products using FlatList

## What is FlatList?

`FlatList` is a React Native component used to **display a list of data efficiently**.

It works mainly with an **array** of data.

Example:

```js
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" }
];
```

We can display this array using:

```jsx
<FlatList
  data={fruits}
  renderItem={({ item }) => (
    <Text>{item.name}</Text>
  )}
  keyExtractor={(item) => item.id.toString()}
/>
```

### In Simple Words

**Array → FlatList → Display items**

FlatList is useful when we have **many items** because it efficiently renders the list.
