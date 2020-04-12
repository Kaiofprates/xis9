import React, { useState, useEffect } from 'react';
import Register from '../Register';
import { Text, View, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Camera } from 'expo-camera';
import styles from './styles';


export default function Cam({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [indicator, setIndicator] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    snap = async () => {
        if (this.camera) {
            setIndicator(true)
            let photo = await this.camera.takePictureAsync();
            if (photo.uri) {
                navigation.navigate('Register', { uri: photo.uri });
            }
        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.main}>
            <View style={styles.flip}>
                <Button containerStyle={styles.flipButton}
                    type="outline"
                    icon={<Icon
                        name="corner-right-up"
                        type="feather"
                        size={20}
                        color="white"
                    />
                    }
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        )
                    }}
                    iconRight={false}
                    title=""
                />
            </View>
            <Camera style={styles.cam} type={type} ref={ref => {
                this.camera = ref;
            }}>
                {indicator ? <ActivityIndicator style={styles.indicator} size={80} color="#89AAE6" /> : null}
            </Camera>
            <View style={styles.take}>
                <Button
                    containerStyle={styles.viewButton}
                    type="outline"

                    icon={
                        <Icon
                            name="camera"
                            type="feather"
                            size={40}
                            color="white"
                        />
                    }
                    onPress={() => {
                        snap();
                    }}
                    iconRight={false}
                    title=""
                />
            </View>
        </View>
    );
}