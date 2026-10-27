
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

const DialogeBox = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text>DialogeBox</Text>

      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.DialogeBoxButton}
      >
        <Text style={styles.DialogeBoxButtonText}>Open Dialog</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.DialogeBox}>
          <View style={styles.DialogeBoxContent}>
            <Text style={styles.DialogeBoxTitle}>DialogeBox</Text>

            <Text style={styles.DialogeBoxMessage}>
              It is a beautiful dialog box!
            </Text>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.DialogeBoxButton}
            >
              <Text style={styles.DialogeBoxButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  DialogeBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DialogeBoxContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  DialogeBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  DialogeBoxMessage: {
    fontSize: 16,
    marginTop: 10,
  },
  DialogeBoxButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  DialogeBoxButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DialogeBox;
