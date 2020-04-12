import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Banner from '../../components/Perfil';

import { Card, TextInput, Button } from 'react-native-paper';

import styles from './styles';

export default function Register({ navigation, route }) {


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Cam');
            }}>
                <Banner url={route.params.uri ? route.params.uri : null} nome={null} />
            </TouchableOpacity>
            <Card>
                <TextInput underlineColor="#061826" label='Nome' style={{ height: 50 }} />
                <View style={styles.block}>
                    <TextInput underlineColor="#061826" style={{ width: 282, height: 50 }} label='Rua' />
                    <TextInput underlineColor="#0471A6" keyboardType="numeric" style={{ width: 62, height: 50 }} label='Nº' />
                </View>
                <TextInput underlineColor="#061826" label='Bairro' style={{ height: 50 }} />
                <TextInput underlineColor="#0471A6" keyboardType="numeric" label='Artigo' style={{ height: 50 }} />
                <Button icon="archive" mode="contained" onPress={() => console.log('Pressed')}>
                    Cadastrar
                </Button>
            </Card>
        </View>
    );
}


