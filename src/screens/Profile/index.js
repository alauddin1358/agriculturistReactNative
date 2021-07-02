import React, { useState } from "react"
import { Dimensions, ScrollView, SafeAreaView, Image, TouchableOpacity, ImageBackground } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Carousel from 'react-native-snap-carousel'
import { colors } from "../../styles/theme"
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


export default Profile = ({ navigation }) => {

    const [expand, setExpand] = useState(false)

    const expandClick = () => {
        setExpand(!expand)
    }


    const renderAdsItem = ({ item, index }) => {

        return (
            <Block style={styles.slide} margin={[30, 0, 30, 0]}>
                <Image style={styles.ads} source={item.image} />
            </Block>
        );
    }

    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar />
                <ScrollView block style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Profile</Text>
                    <ImageBackground imageStyle={{ borderRadius: 5 }} source={require('../../assets/images/green-bg-1.jpg')} style={styles.bgImg}>
                        <Block flex={false} style={styles.block}>
                            <Image style={{ width: 150, height: 150 }} source={require('../../assets/images/user-profile.png')} />
                        </Block>
                        <TouchableOpacity style={styles.btn}>
                            <Text white bold>Add Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text white bold>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.camera}  onPress={() => navigation.navigate('editProfile')}>
                            <AntDesign name="camera" color="#fff" size={20} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <Block flex={false} style={styles.infoblock}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile')}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>Personal Info</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Name</Text>
                            <Text textColor size={12}>Tasfique alam</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Email</Text>
                            <Text textColor size={12}>Tasfiquealam1@gmail.com</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Phone</Text>
                            <Text textColor size={12}>01652458575</Text>
                        </Block>
                    </Block>
                    <Block flex={false} style={styles.infoblock}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile')}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>User Type</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>User Category</Text>
                            <Text textColor size={12}>Student</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Job</Text>
                            <Text textColor size={12}></Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Specialization</Text>
                            <Text textColor size={12}></Text>
                        </Block>
                    </Block>
                    <Block flex={false} style={styles.infoblock}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile')}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>Other Info</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Address</Text>
                            <Text textColor size={12}>Dhaka</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Country</Text>
                            <Text textColor size={12}>Bangladesh</Text>
                        </Block>
                    </Block>
                    <Carousel
                        ref={(c) => { _carousel = c; }}
                        data={ADS}
                        renderItem={renderAdsItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={170}
                    />
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}