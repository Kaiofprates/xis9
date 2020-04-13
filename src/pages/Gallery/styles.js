import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        backgroundColor: "#0F7173",
        padding: 8,
        textAlign: 'center'
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flat: {
        padding: 9
    },
    chip: {
        width: 300,
        justifyContent: 'center',
        textAlign: "center",
        padding: 5,
        marginTop: 3
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

module.exports = styles;