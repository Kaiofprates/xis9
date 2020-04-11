import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#0E3859",
        padding: 8,
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

module.exports = styles;