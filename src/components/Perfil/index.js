import * as React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native';

import styles from './styles';


export default function Banner(props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image source={{ uri: props.url }} style={styles.imageBanner} resizeMode="stretch" />
                </View>
                <View>
                    <Text numberOfLines={2} style={styles.textBanner}>
                        {props.nome}
                    </Text>
                </View>
            </View>
        </>
    );
}

