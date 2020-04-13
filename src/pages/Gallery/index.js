import React from 'react'
import Banner from '../../components/Perfil'
import { Chip, Searchbar } from 'react-native-paper';

import { getDataBase } from '../../Database/data';

import {

    FlatList,
    TouchableOpacity,
    Text,
    SafeAreaView,
    View

} from 'react-native';

import styles from './styles';

export default function Gallery() {

    const dados = [
        {
            nome: 'Kaio',
            photo: 'file:///data/data/host.exp.exponent/cache/ExperienceData/%2540kaiofprates%252Fxnine/Camera/3bd29b21-c11a-482d-8346-902f35bc2fbc.jpg'
        },
        {
            nome: 'Kaio',
            photo: 'file:///data/data/host.exp.exponent/cache/ExperienceData/%2540kaiofprates%252Fxnine/Camera/3bd29b21-c11a-482d-8346-902f35bc2fbc.jpg'
        }
    ]


    function teste() {
        console.log(getDataBase());
    }


    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                alert('Hello World!')
            }}>
            <Banner key={item} nome={null} url={item.photo} />
            <View style={styles.info}>
                <Chip icon="book" style={styles.chip} onPress={() => teste()} type="outlined" >Nome</Chip>
                <Chip icon="home" style={styles.chip} onPress={() => console.log('Pressed')}>Endereço</Chip>
                <Chip icon="gavel" style={styles.chip} onPress={() => console.log('Pressed')}>Artigo</Chip>
            </View>


        </TouchableOpacity>

    );



    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Search"
            />
            <FlatList
                horizontal={true}
                data={dados}
                renderItem={renderItem}
                // numColumns={2}
                style={styles.flat}
            />
        </SafeAreaView>
    );
}
