import * as React from 'react';
import { View } from 'react-native';

import { Card, TextInput } from 'react-native-paper';

export default function Register() {
    return (
        <View style={styles.container}>
            <Card>
                <TextInput underlineColor="#061826" label='Nome' />
                <View style={styles.block}>
                    <TextInput underlineColor="#061826" style={{ width: 282 }} label='Rua' />
                    <TextInput underlineColor="#0471A6" keyboardType="numeric" style={{ width: 62 }} label='Nº' />
                </View>
                <TextInput underlineColor="#061826" label='Bairro' />
                <TextInput underlineColor="#0471A6" keyboardType="numeric" label='Artigo' />

            </Card>
        </View>
    );
}


