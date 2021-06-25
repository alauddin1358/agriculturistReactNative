import React from "react"
import { ScrollView, TextInput } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { Navbar } from "../../layouts/Navbar"
import AdsCarousel from '../Carousel'
import { SecondaryButton } from '../../components/Button'



export default AddPost = ({ navigation }) => {


    return (

        <Block block>
            <Navbar
                onPressProfile={() => navigation.navigate('profile')}
                onPressDrawer={() => navigation.openDrawer()}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
                <Block style={styles.block} flex={false}>
                    <Block flex={false} style={styles.postBlock2}>
                        <Text style={styles.title}>Add Post</Text>
                    </Block>
                    <Block flex={false} padding={[20, 10]}>
                        <Text size={16} textColor>Title</Text>
                        <TextInput
                            style={styles.titleBlock}
                            placeholder="Enter title"
                        />
                    </Block>
                    <Block flex={false} padding={[20, 10]}>
                        <Text size={16} textColor>Body</Text>
                        <TextInput
                            multiline
                            style={styles.BodyBlock}
                            placeholder="Enter Body"
                        />
                    </Block>
                    <SecondaryButton
                        btnText="Add Post"
                        btnStyle={{ width: '40%', marginBottom: 20 }} />
                </Block>
                <AdsCarousel />
            </ScrollView>
        </Block>

    );
}