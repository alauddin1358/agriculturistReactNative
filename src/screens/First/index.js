import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const First = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('login')
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/splash_icon.gif')} />
        </View>
    );
};

export default First;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#176200',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
});