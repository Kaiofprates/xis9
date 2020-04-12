import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../../navigators/regiterNavigator';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Gallery')}
                title="Go to Gallery"
            />
        </View>
    );
}

function Gallery({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to Home"
            />
        </View>
    );

}


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Gallery" component={Gallery} />
                <Drawer.Screen name="Register" component={Register} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}