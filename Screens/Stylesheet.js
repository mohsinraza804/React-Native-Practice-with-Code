import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        padding: 16,
        backgroundColor: "#F4F7FB",
    },

    heading: {
        textAlign: "center",
        fontSize: 28,
        padding: 15,
        marginBottom: 8,
        fontWeight: "bold",
        color: "#1E293B",
    },

    view: {
        marginVertical: 7,
        padding: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E2E8F0",

        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 4,
    },

    name: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#2563EB",
        marginBottom: 5,
    },

    email: {
        fontSize: 15,
        color: "#64748B",
    },

})