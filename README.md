# Axios API Methods in React Native

## What is Axios?
Axios is a JavaScript library used to send HTTP requests from React Native to a backend API.

## 5 Important API Methods

| Method | Purpose | Example |
|---|---|---|
| GET | Fetch/read data | Display expenses |
| POST | Create new data | Add expense |
| PUT | Update complete data | Edit all expense details |
| PATCH | Update specific data | Change expense status |
| DELETE | Remove data | Delete expense |

## Basic Syntax

```javascript
// GET
axios.get('/expenses');

// POST
axios.post('/expenses', data);

// PUT
axios.put('/expenses/1', data);

// PATCH
axios.patch('/expenses/1', { status: 'completed' });

// DELETE
axios.delete('/expenses/1');
```

## CRUD Operations

- **C – Create:** POST
- **R – Read:** GET
- **U – Update:** PUT / PATCH
- **D – Delete:** DELETE

## What I Learned

- How to connect React Native with a backend API.
- How to fetch and display data.
- How to add new records.
- How to update complete or specific fields.
- How to delete records.
- How to use Axios with async/await.
- How to handle API errors using try/catch.

## Technologies
- React Native
- JavaScript
- Axios
- JSON Server
- REST API

# Expense Tracker App

## About
A React Native Expense Tracker application that helps users manage daily expenses, track spending, and monitor completed and pending payments.

## Features
- Add new expenses.
- View all expenses.
- Update complete expense details.
- Update expense status.
- Delete expenses.
- Calculate total spending.
- Calculate completed and pending amounts.
- Display expenses in attractive cards.
- Form validation and error handling.

## API Methods Practiced

| API Method | Purpose |
|---|---|
| GET | Fetch all expenses |
| POST | Add a new expense |
| PUT | Update complete expense |
| PATCH | Update specific expense fields |
| DELETE | Delete an expense |

## React Native Concepts Practiced
- Functional Components
- useState and useEffect
- TextInput and TouchableOpacity
- Event Handling
- ScrollView
- StyleSheet
- map(), filter(), reduce()
- Conditional Rendering
- Form Validation
- Async/Await and Try/Catch

## Technologies Used
- React Native
- JavaScript
- Axios
- JSON Server
- REST API

## API Base URL
`http://10.0.2.2:3000/expenses`

## What I Learned
Through this project, I practiced API integration, CRUD operations, state management, handling user input, calculating expenses, and creating a user-friendly mobile interface.

## Project Goal
To build a practical real-world expense management application using React Native and REST APIs.