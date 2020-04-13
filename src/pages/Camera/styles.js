import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0F7173'
    },
    button: {
        fontSize: 18, margin: 20, color: 'white'
    },
    flipButton: {
        height: 40,
    },
    viewButton: {
        height: 80,
    },
    flip: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 12,
        width: 40
    },
    take: {
        justifyContent: 'flex-end',
        height: 12,
        width: 120,
        marginLeft: '35%',
    },
    cam: {
        flex: 0.9,
    },
    indicator: {
        marginTop: 200,
    }
});


module.exports = styles;