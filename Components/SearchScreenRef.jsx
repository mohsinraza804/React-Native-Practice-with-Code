import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const users = [
  { id: '1', name: 'Ali Raza' },
  { id: '2', name: 'Ali Khan' },
  { id: '3', name: 'Ali Ahmed' },
  { id: '4', name: 'Mohsin Raza' },
  { id: '5', name: 'Usman Ali' },
];

const App = () => {
  const inputRef = useRef(null);

  // Actual search count is stored here
  const searchCountRef = useRef(0);

  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState(users);

  // Only used to update the UI
  const [displayCount, setDisplayCount] = useState(0);

  // Focus input when screen opens
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    // Increase ref value
    searchCountRef.current++;

    // Update UI
    setDisplayCount(searchCountRef.current);

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setResults(filteredUsers);
  };

  const handleClear = () => {
    setSearchText('');
    setResults(users);
    setDisplayCount(0);
    // Keep input focused
    inputRef.current.clear();
    inputRef.current.focus();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Search Users</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Enter user name"
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.buttons}>
        <Button
          title="Search"
          onPress={handleSearch}
        />

        <Button
          title="Clear"
          onPress={handleClear}
        />
      </View>

      <Text style={styles.count}>
        Searches: {displayCount}
      </Text>

      <Text style={styles.resultTitle}>
        Results:
      </Text>

      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.user}>
            {item.name}
          </Text>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  count: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  user: {
    fontSize: 18,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default App;