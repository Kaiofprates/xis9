import React from 'react';
import Cam from '../pages/Camera';
import Main from '../pages/Main';

import Register from '../pages/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Cam" component={Cam}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Main" component={Main}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
