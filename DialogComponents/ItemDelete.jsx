
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
} from 'react-native';

const ItemDelete = () => {
  const [data, setData] = useState([
    { id: 1, name: 'APPLES', price: 100 },
    { id: 2, name: 'ORANGES', price: 200 },
    { id: 3, name: 'BANANAS', price: 300 },
    { id: 4, name: 'GRAPES', price: 400 },
    { id: 5, name: 'STRAWBERRIES', price: 500 },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const deleteItem = () => {
    if (selectedItem === null) return;

    setData(previousData =>
      previousData.filter(item => item.id !== selectedItem.id)
    );

    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F1F3F8"
        barStyle="dark-content"
      />

      <Text style={styles.heading}>
        Items in Our Inventory
      </Text>

      {data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>
              Price: Rs. {item.price}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setSelectedItem(item)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {data.length === 0 && (
        <Text style={styles.emptyText}>
          No items remaining in inventory.
        </Text>
      )}

      <Modal
        visible={selectedItem !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedItem(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Confirm Delete
            </Text>

            <Text style={styles.modalText}>
              Are you sure you want to delete{' '}
              {selectedItem?.name}?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={deleteItem}
              >
                <Text style={styles.buttonText}>
                  Yes, Delete
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setSelectedItem(null)}
              >
                <Text style={styles.buttonText}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#a0adcc',
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 25,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d5caca',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#d7ebf3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444444',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
  },
  confirmButton: {
    backgroundColor: '#E53935',
    padding: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#666666',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ItemDelete;
