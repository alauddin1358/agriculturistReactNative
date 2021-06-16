import React from "react"
import { Dimensions, ScrollView, Image, TextInput } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'
import { Navbar } from "../../layouts/Navbar"
import { TouchableOpacity } from "react-native-gesture-handler"



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


export default PostDetails = props => {


    const renderAdsItem = ({ item, index }) => {

        return (
            <Block style={styles.slide} margin={[30, 0]}>
                <Image style={styles.ads} source={item.image} />
            </Block>
        );
    }

    return (

        <Block block>
            <Navbar />
            <ScrollView block style={styles.container}>
                <Block style={styles.block} flex={false}>
                    <Block flex={false} style={styles.item} margin={[0, 0, 10, 0]}>
                        <Text bold textColor style={styles.post}>Changes in Acid Invertase Activity
                        and Sugar Distribution in Asparagus Spears Harvested in Autumn; Authors:
                        A.K.M. Shameem ALAM, Toshiyuki MATSUI, Takao IKEUCHI Author information',
                    </Text>
                        <Block flex={false} row center style={{ maxWidth: 300 }}>
                            <Block flex={false} row center margin={[5, 5, 0]}>
                                <MaterialIcons style={{ marginRight: 5 }} name="date-range" />
                                <Text textColor size={12}>Publish Date: 22/3/2021</Text>
                            </Block>
                            <Block flex={false} row center margin={[5, 5, 0]}>
                                <MaterialIcons style={{ marginRight: 5 }} name="person" />
                                <Text textColor size={12}>Author: AKM Kannam</Text>
                            </Block>
                        </Block>

                        <Block flex={false} margin={[10, 0]}>
                            <Text textColor size={12} style={styles.des}>Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia, there live the blind texts. Separated they
                            live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                            river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful
                            Pointing has no control about the blind texts it is an almost unorthographic life One day however a small
                            line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
                            advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli,
                            but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made
                            herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline
                            of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</Text>

                        </Block>
                    </Block>
                    <Block flex={false} style={styles.comments}>
                        <Text size={19}>Comments</Text>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            placeholder="Enter Your Comment"
                            numberOfLines={4} />
                            <TouchableOpacity style={styles.btn}>
                                <Text white>Submit</Text>
                            </TouchableOpacity>

                            <Block row center flex={false} margin={[20,0,0]}>
                                <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')}/>
                                <Block flex={false} style={styles.dot}></Block>
                                <Block flex={false} style={styles.com}>
                                    <Text textColor>djfhgj</Text>
                                </Block>
                            </Block>
                    </Block>
                    <Carousel
                        ref={(c) => { _carousel = c; }}
                        data={ADS}
                        renderItem={renderAdsItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={170}
                    />
                </Block>
            </ScrollView>
        </Block>

    );
}