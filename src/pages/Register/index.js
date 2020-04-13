import React, {
    useEffect, useState
} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Banner from '../../components/Perfil';

import { insertDataBase } from '../../Database/data';

import { Card, TextInput, Button } from 'react-native-paper';

import styles from './styles';

export default function Register({ navigation, route }) {
    const [uri, setUri] = useState(null);

    const [name, setName] = useState(null);
    const [street, setStreet] = useState(null);
    const [village, setVillage] = useState(null);
    const [number, setNumber] = useState(null);
    const [article, setArticle] = useState(null);


    function intesertData() {
        insertDataBase(name, street, number, village, article, uri);
    }

    useEffect(() => {
        getParms()
    }, [route]);

    function getParms() {
        try {
            setUri(route.params.uri);

        } catch (err) {
            setUri(false)
        }

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Cam');
            }}>
                <Banner url={uri ? uri : null} nome={null} />
            </TouchableOpacity>
            <Card>
                <TextInput underlineColor="#061826" label='Nome' style={{ height: 50 }} onChangeText={setName} />
                <View style={styles.block}>
                    <TextInput underlineColor="#061826" style={{ width: 282, height: 50 }} label='Rua' onChangeText={setStreet} />
                    <TextInput underlineColor="#0471A6" keyboardType="numeric" style={{ width: 62, height: 50 }} label='Nº' onChangeText={setNumber} />
                </View>
                <TextInput underlineColor="#061826" label='Bairro' style={{ height: 50 }} onChangeText={setVillage} />
                <TextInput underlineColor="#0471A6" keyboardType="numeric" label='Artigo' style={{ height: 50 }} onChangeText={setArticle} />
                <Button icon="archive" mode="contained" style={{
                    backgroundColor: "#0F7189"
                }} onPress={() => intesertData()}>
                    Cadastrar
                </Button>
            </Card>
        </View>
    );
}


