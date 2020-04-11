import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        fontSize: 18, margin: 20, color: 'white'
    },
    viewButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'blue',
        marginBottom: 60,
        borderRadius: 8,
        marginRight: 20,
        marginLeft: 40

    }
});


module.exports = styles;