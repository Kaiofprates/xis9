import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
//import { Icon } from 'react-native-vector-icons/Feather'
import { Camera } from 'expo-camera';
import styles from './styles';


export default function Cam() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            alert(photo.uri);
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
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                this.camera = ref;
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>

                    <Button
                        containerStyle={styles.viewButton}
                        icon={
                            <Icon
                                name="arrow-up-circle"
                                type="feather"
                                size={30}
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
                        title="Flip"
                    />

                    <TouchableOpacity
                        style={styles.viewButton}
                        onPress={() => {
                            snap();
                        }}>
                        <Text style={styles.button}> Take a picture </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}