import React, { useEffect, useState } from "react"
import { Dimensions, Image } from "react-native"
import { useDispatch } from 'react-redux'
import Block from '../../components/Block'
import styles from './styles'
import Carousel from 'react-native-snap-carousel'
import { Loader } from "../../components/Loader"
import { fetchAdsService } from "../../services/ads"



export default AdsCarousel = ({ navigation, carousel }) => {
    const dispatch = useDispatch()

    const [ads, setAds] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAdsList()
    }, [])

    const getAdsList = () => {
        dispatch(fetchAdsService((res, err) => {
            setIsLoading(false)
            console.log('res', res);
            setAds(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }

    const renderAdsItem = ({ item }) => {

        return (
            <Block center style={styles.slide} margin={[30, 0]} flex={false}>
                <Image style={styles.ads} source={{ uri: item?.filedata }} />
            </Block>
        );
    }

    return (

        <Block flex={false} center middle>

            <Carousel
                ref={(c) => { carousel = c; }}
                data={ads}
                renderItem={renderAdsItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width - 20}
            />
        </Block>

    );
}