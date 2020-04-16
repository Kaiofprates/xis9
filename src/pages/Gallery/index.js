import React, {
    useState,
    useEffect
} from 'react'
import Banner from '../../components/Perfil'
import { Chip, Searchbar } from 'react-native-paper';

import { getDataBase, deletData } from '../../Database/data';

import {

    FlatList,
    TouchableOpacity,
    Text,
    SafeAreaView,
    View,
    Modal

} from 'react-native';

import styles from './styles';

export default function Gallery() {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        async function sendData() {
            await getDataBase(setData);
            console.log(data.items[1]);
        }
        sendData();

    }, [])



    function teste() {
        console.log(getDataBase());
    }


    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                //deletData(item.nome);
                setModal(!modal);
            }}>
            <Banner key={item.nome} nome={null} url={item.photo} />

            <View style={styles.info}>
                <Chip icon="book" style={styles.chip} onPress={() => teste()} type="outlined" >{item.nome}</Chip>
                <Chip icon="home" style={styles.chip} onPress={() => console.log('Pressed')}>{item.rua + '  ' + item.numero}</Chip>
                <Chip icon="home" style={styles.chip} onPress={() => console.log('Pressed')}>{item.bairro}</Chip>
                <Chip icon="gavel" style={styles.chip} onPress={() => console.log('Pressed')}>{item.artigo}</Chip>
            </View>
        </TouchableOpacity>

    );



    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Search"
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal();
                }}


            >
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            setModal(!modal);
                        }}  >
                        <Text style={{
                            color: 'white',
                            textSize: 40
                        }}>
                            Sair
                      </Text>
                    </TouchableOpacity>

                </View>

            </Modal>
            <FlatList
                horizontal={true}
                data={data.items}
                renderItem={renderItem}
                // numColumns={2}
                style={styles.flat}
            />
        </SafeAreaView>
    );
}
