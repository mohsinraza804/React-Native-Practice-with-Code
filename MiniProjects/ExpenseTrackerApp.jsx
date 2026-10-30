import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StyleSheet
} from 'react-native';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseTrackerApp = () => {

    const [expensedata, setExpensedata] = useState({
        id: '',
        title: '',
        amount: '',
        category: '',
        date: '',
        paymentMethod: '',
        status: ''
    });

    const [data, setdata] = useState([]);

    // GET API
    const fetchExpenses = async () => {
        try {
            const response = await axios.get(
                'http://10.0.2.2:3000/expenses'
            );

            setdata(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Expenses could not be loaded!');
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    // Calculate total amounts from API data
    const Tspending = data
        .filter(expense => expense.status === 'completed')
        .reduce((total, expense) => total + Number(expense.amount || 0), 0);

    const pendingamount = data
        .filter(expense => expense.status === 'pending')
        .reduce((total, expense) => total + Number(expense.amount || 0), 0);

    const spending = data.reduce(
        (total, expense) => total + Number(expense.amount || 0),
        0
    );

    // Handle form inputs
    const FormHandler = (field, value) => {
        setExpensedata({ ...expensedata, [field]: value });
    };

    // POST API: Add Expense
    const addExpense = async () => {
        try {
            if (
                expensedata.title.trim() === '' ||
                expensedata.amount.trim() === '' ||
                expensedata.category.trim() === '' ||
                expensedata.date.trim() === '' ||
                expensedata.paymentMethod.trim() === '' ||
                expensedata.status.trim() === ''
            ) {
                Alert.alert('Fill Form', 'Please fill in all fields');
                return;
            }

            const newExpense = {
                ...expensedata,
                amount: Number(expensedata.amount)
            };

            // Let JSON Server generate the ID
            delete newExpense.id;

            const response = await axios.post(
                'http://10.0.2.2:3000/expenses',
                newExpense
            );

            console.log(response.data);
            Alert.alert('Added', 'Expense added successfully');

            setExpensedata({
                id: '',
                title: '',
                amount: '',
                category: '',
                date: '',
                paymentMethod: '',
                status: ''
            });

            fetchExpenses();

        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Expense not added!');
        }
    };

    // PUT API: Update Complete Expense
    const updateExpense = async () => {
        try {
            if (
                expensedata.id.trim() === '' ||
                expensedata.title.trim() === '' ||
                expensedata.amount.trim() === '' ||
                expensedata.category.trim() === '' ||
                expensedata.date.trim() === '' ||
                expensedata.paymentMethod.trim() === '' ||
                expensedata.status.trim() === ''
            ) {
                Alert.alert('Fill Form', 'Please fill in all fields to update');
                return;
            }

            const response = await axios.put(
                `http://10.0.2.2:3000/expenses/${expensedata.id}`,
                {
                    id: expensedata.id,
                    title: expensedata.title,
                    amount: Number(expensedata.amount),
                    category: expensedata.category,
                    date: expensedata.date,
                    paymentMethod: expensedata.paymentMethod,
                    status: expensedata.status
                }
            );

            console.log(response.data);
            Alert.alert('Updated', 'Expense updated successfully');

            setExpensedata({
                id: '',
                title: '',
                amount: '',
                category: '',
                date: '',
                paymentMethod: '',
                status: ''
            });

            fetchExpenses();

        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Expense not updated!');
        }
    };

    // PATCH API: Update Only Status
    const updatestatus = async () => {
        try {
            if (
                expensedata.id.trim() === '' ||
                expensedata.status.trim() === ''
            ) {
                Alert.alert('Fill Form', 'Enter expense ID and status');
                return;
            }

            const response = await axios.patch(
                `http://10.0.2.2:3000/expenses/${expensedata.id}`,
                {
                    status: expensedata.status
                }
            );

            console.log(response.data);
            Alert.alert('Updated', 'Status updated successfully');

            setExpensedata({
                id: '',
                title: '',
                amount: '',
                category: '',
                date: '',
                paymentMethod: '',
                status: ''
            });

            fetchExpenses();

        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Status not updated!');
        }
    };

    // DELETE API: Delete Expense
    const Deletedata = async () => {
        try {
            if (expensedata.id.trim() === '') {
                Alert.alert('Fill Form', 'Please enter expense ID');
                return;
            }

            await axios.delete(
                `http://10.0.2.2:3000/expenses/${expensedata.id}`
            );

            Alert.alert('Deleted', 'Expense deleted successfully');

            setExpensedata({
                id: '',
                title: '',
                amount: '',
                category: '',
                date: '',
                paymentMethod: '',
                status: ''
            });

            fetchExpenses();

        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Expense not deleted!');
        }
    };

    return (
        <ScrollView style={styles.container} >

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Expense Tracker</Text>
                <Text style={styles.headerSubtitle}>Manage your money wisely</Text>
            </View>

            {/* DASHBOARD */}
            <View style={styles.dashboard}>
                <Text style={styles.sectionTitle}>Your Spending</Text>

                <View style={styles.totalCard}>
                    <Text style={styles.cardLabel}>Total Spending</Text>
                    <Text style={styles.totalAmount}>Rs. {spending}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <View style={styles.summaryCard}>
                        <Text style={styles.cardLabel}>Completed</Text>
                        <Text style={styles.completedAmount}>Rs. {Tspending}</Text>
                    </View>

                    <View style={styles.summaryCard}>
                        <Text style={styles.cardLabel}>Pending</Text>
                        <Text style={styles.pendingAmount}>Rs. {pendingamount}</Text>
                    </View>
                </View>
            </View>

            {/* ADD EXPENSE */}
            <View style={styles.formCard}>
                <Text style={styles.sectionTitle}>Add New Expense</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Expense Name"
                    placeholderTextColor="#999"
                    value={expensedata.title}
                    onChangeText={(value) => FormHandler('title', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={expensedata.amount}
                    onChangeText={(value) => FormHandler('amount', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Category"
                    placeholderTextColor="#999"
                    value={expensedata.category}
                    onChangeText={(value) => FormHandler('category', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Date (YYYY-MM-DD)"
                    placeholderTextColor="#999"
                    value={expensedata.date}
                    onChangeText={(value) => FormHandler('date', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Payment Method"
                    placeholderTextColor="#999"
                    value={expensedata.paymentMethod}
                    onChangeText={(value) => FormHandler('paymentMethod', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Status (completed/pending)"
                    placeholderTextColor="#999"
                    value={expensedata.status}
                    onChangeText={(value) => FormHandler('status', value)}
                />

                <TouchableOpacity style={styles.addButton} onPress={addExpense}>
                    <Text style={styles.buttonText}>+ Add Expense</Text>
                </TouchableOpacity>
            </View>

            {/* UPDATE EXPENSE */}
            <View style={styles.formCard}>
                <Text style={styles.sectionTitle}>Update Expense</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Expense ID"
                    placeholderTextColor="#999"
                    value={expensedata.id}
                    onChangeText={(value) => FormHandler('id', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Expense Name"
                    placeholderTextColor="#999"
                    value={expensedata.title}
                    onChangeText={(value) => FormHandler('title', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={expensedata.amount}
                    onChangeText={(value) => FormHandler('amount', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Category"
                    placeholderTextColor="#999"
                    value={expensedata.category}
                    onChangeText={(value) => FormHandler('category', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Date (YYYY-MM-DD)"
                    placeholderTextColor="#999"
                    value={expensedata.date}
                    onChangeText={(value) => FormHandler('date', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Payment Method"
                    placeholderTextColor="#999"
                    value={expensedata.paymentMethod}
                    onChangeText={(value) => FormHandler('paymentMethod', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Status"
                    placeholderTextColor="#999"
                    value={expensedata.status}
                    onChangeText={(value) => FormHandler('status', value)}
                />

                <TouchableOpacity style={styles.updateButton} onPress={updateExpense}>
                    <Text style={styles.buttonText}>Update Expense</Text>
                </TouchableOpacity>
            </View>

            {/* PATCH STATUS */}
            <View style={styles.formCard}>
                <Text style={styles.sectionTitle}>Update Status</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Expense ID"
                    placeholderTextColor="#999"
                    value={expensedata.id}
                    onChangeText={(value) => FormHandler('id', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="completed / pending"
                    placeholderTextColor="#999"
                    value={expensedata.status}
                    onChangeText={(value) => FormHandler('status', value)}
                />

                <TouchableOpacity style={styles.statusButton} onPress={updatestatus}>
                    <Text style={styles.buttonText}>Update Status</Text>
                </TouchableOpacity>
            </View>

            {/* DELETE */}
            <View style={styles.formCard}>
                <Text style={styles.sectionTitle}>Delete Expense</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter Expense ID"
                    placeholderTextColor="#999"
                    value={expensedata.id}
                    onChangeText={(value) => FormHandler('id', value)}
                />

                <TouchableOpacity style={styles.deleteButton} onPress={Deletedata}>
                    <Text style={styles.buttonText}>Delete Expense</Text>
                </TouchableOpacity>
            </View>

            {/* EXPENSE LIST */}
            <View style={styles.expenseSection}>
                <Text style={styles.sectionTitle}>Recent Expenses</Text>

                {data.map((expense) => (
                    <View style={styles.expenseCard} key={expense.id}>

                        <View style={styles.expenseTop}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.expenseTitle}>{expense.title}</Text>
                                <Text style={styles.expenseCategory}>{expense.category}</Text>
                            </View>

                            <Text style={styles.expenseAmount}>
                                Rs. {expense.amount}
                            </Text>
                        </View>

                        <View style={styles.expenseBottom}>
                            <Text style={styles.expenseDetails}>
                                {expense.date} • {expense.paymentMethod}
                            </Text>

                            <View style={[
                                styles.statusBadge,
                                expense.status === 'completed'
                                    ? styles.completedBadge
                                    : styles.pendingBadge
                            ]}>
                                <Text style={styles.statusText}>
                                    {expense.status}
                                </Text>
                            </View>
                        </View>

                    </View>
                ))}

                {data.length === 0 && (
                    <Text style={styles.emptyText}>No expenses found yet.</Text>
                )}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: '#F4F6FA',
        padding: 18,
    },

    header: {
        marginTop: 0,
        marginBottom: 22,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#172554',
    },

    headerSubtitle: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 5,
    },

    dashboard: {
        marginBottom: 22,
    },

    sectionTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 15,
    },

    totalCard: {
        backgroundColor: '#172554',
        padding: 22,
        borderRadius: 18,
        marginBottom: 12,
    },

    cardLabel: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 8,
    },

    totalAmount: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    summaryRow: {
        flexDirection: 'row',
        gap: 12,
    },

    summaryCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 17,
        borderRadius: 15,
        elevation: 3,
    },

    completedAmount: {
        color: '#16A34A',
        fontSize: 17,
        fontWeight: 'bold',
    },

    pendingAmount: {
        color: '#EA580C',
        fontSize: 17,
        fontWeight: 'bold',
    },

    formCard: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 18,
        marginBottom: 20,
        elevation: 3,
    },

    input: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 13,
        fontSize: 15,
        color: '#1E293B',
        marginBottom: 12,
    },

    addButton: {
        backgroundColor: '#2563EB',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 5,
    },

    updateButton: {
        backgroundColor: '#7C3AED',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },

    statusButton: {
        backgroundColor: '#0891B2',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },

    deleteButton: {
        backgroundColor: '#DC2626',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    expenseSection: {
        marginBottom: 30,
    },

    expenseCard: {
        backgroundColor: '#FFFFFF',
        padding: 17,
        borderRadius: 15,
        marginBottom: 12,
        elevation: 2,
    },

    expenseTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    expenseTitle: {
        color: '#1E293B',
        fontSize: 16,
        fontWeight: 'bold',
    },

    expenseCategory: {
        color: '#64748B',
        fontSize: 13,
        marginTop: 5,
    },

    expenseAmount: {
        color: '#172554',
        fontSize: 17,
        fontWeight: 'bold',
    },

    expenseBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        flexWrap: 'wrap',
        gap: 8,
    },

    expenseDetails: {
        color: '#64748B',
        fontSize: 12,
    },

    statusBadge: {
        paddingHorizontal: 11,
        paddingVertical: 6,
        borderRadius: 20,
    },

    completedBadge: {
        backgroundColor: '#DCFCE7',
    },

    pendingBadge: {
        backgroundColor: '#FFEDD5',
    },

    statusText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#334155',
    },

    emptyText: {
        textAlign: 'center',
        color: '#64748B',
        padding: 20,
    },

});

    export default ExpenseTrackerApp;