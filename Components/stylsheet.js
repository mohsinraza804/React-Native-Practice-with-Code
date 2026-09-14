import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#F4F7FB',
    },
    heading: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    item: {
        padding: 10,
        width: '48%',
        height: 100,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',

    },
    image: {
        width: 150,
        height: 160,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    items: {
        width: '47%',
        minHeight: 220,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',

        marginBottom: 16,
        padding: 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 5,
    },

    textView: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 5,
    },

    Text: {
        marginBottom: 6,
        color: '#1E293B',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    price: {
        color: '#2563EB',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    }

})