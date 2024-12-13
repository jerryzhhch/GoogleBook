import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center"
    },
    bodyText: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 40,
        fontWeight: 800
    },
    button: {
        justifyContent: "center",
        alignSelf: "center",
        margin: 20,
        height: 60,
        width: 120,
        backgroundColor: "grey",
        borderRadius: 10, 
        borderWidth: 2
    },
    buttonText: {
        alignSelf: "center",
        fontSize: 24,
        color: "#FFFFFF"
    }
});