import React from "react"
import { Dimensions, ScrollView, Image, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import Carousel from 'react-native-snap-carousel'
import { Navbar } from "../../layouts/Navbar"



const ADS = [
    {
        id: 1,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 2,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 3,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 4,
        image: require('../../assets/images/download.jpeg')
    }
];


export default Friends = ({ navigation, _carousel }) => {


    const renderAdsItem = ({ item, index }) => {

        return (
            <Block style={styles.slide} margin={[30, 0]}>
                <Image style={styles.ads} source={item.image} />
            </Block>
        );
    }

    return (

        <Block block>
            <Navbar
                onPressProfile={() => navigation.navigate('profile')}
                onPressDrawer={() => navigation.openDrawer()}
            />
            <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                <Text textColor size={20}>Friends</Text>
                <Block block >
                    <Block flex={false} style={styles.postBlock2} margin={[0, 0, 20, 0]}>
                        <Text style={styles.title}>Friend Requests</Text>
                    </Block>
                    <Block flex={false} style={styles.postBlock2}>
                        <Text style={styles.title}>People may you know</Text>
                        <Block row center style={styles.styleBlock} flex={false}>
                            <Block flex={false} margin={[0, 20, 0, 0]}>
                                <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            </Block>
                            <Block width flex={false}>
                                <Text bold size={19} textColor>Md Alauddin Ali</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text size={14} white>Add Friend</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <Block row center style={styles.styleBlock} flex={false}>
                            <Block flex={false} margin={[0, 20, 0, 0]}>
                                <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            </Block>
                            <Block width flex={false}>
                                <Text bold size={19} textColor>Md Alauddin Ali</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text size={14} white>Add Friend</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <Block row center style={styles.styleBlock} flex={false}>
                            <Block flex={false} margin={[0, 20, 0, 0]}>
                                <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            </Block>
                            <Block width flex={false}>
                                <Text bold size={19} textColor>Md Alauddin Ali</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text size={14} white>Add Friend</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <Block row center style={styles.styleBlock} flex={false}>
                            <Block flex={false} margin={[0, 20, 0, 0]}>
                                <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            </Block>
                            <Block width flex={false}>
                                <Text bold size={19} textColor>Md Alauddin Ali</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text size={14} white>Add Friend</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>


                    </Block>
                    <Block center flex={false}>
                        <Carousel
                            ref={(c) => { _carousel = c; }}
                            data={ADS}
                            renderItem={renderAdsItem}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width - 40}
                        />
                    </Block>
                </Block>
            </ScrollView>
        </Block>

    );
}