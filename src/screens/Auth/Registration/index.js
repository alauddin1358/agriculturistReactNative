import React, { useState } from "react"
import { ImageBackground, ScrollView, FlatList, Image, TouchableOpacity } from "react-native"
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from "../../../styles/theme"
import DropDownPicker from 'react-native-dropdown-picker';
import { PrimaryInput } from "../../../components/TextInput"
import { PrimaryButton } from "../../../components/Button"
import { Actions } from "react-native-router-flux"






export default Registration = (props) => {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (

        <Block block>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <ImageBackground style={styles.bgImg} source={require('../../../assets/images/green-bg-1.jpg')}>
                    <Block style={styles.loginBlock} flex={false}>
                        <Text size={27} bold white center>Registration</Text>
                        <Block padding={[15, 0]} flex={false}>
                            <Text white>Name* :</Text>
                            <PrimaryInput
                                placeholder="Enter First Name"
                            />
                            <PrimaryInput
                                placeholder="Enter Middle Name"
                            />
                            <PrimaryInput
                                placeholder="Enter Last Name"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>User category* :</Text>
                            <DropDownPicker
                                style={styles.picker}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: colors.white }}
                                placeholder="Select User Category"
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Email* :</Text>
                            <PrimaryInput
                                placeholder="Enter Email"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Phone :</Text>
                            <PrimaryInput
                                placeholder="Enter Phone Number"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Password* :</Text>
                            <PrimaryInput
                                placeholder="Enter Password"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Confirm Password* :</Text>
                            <PrimaryInput
                                placeholder="Enter Password Again"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Address :</Text>
                            <PrimaryInput
                                placeholder="Enter Address"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Country :</Text>
                            <DropDownPicker
                                style={styles.picker}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: colors.white }}
                                placeholder="Select Country"
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Profile Picture :</Text>
                            <Block center middle style={styles.avatar} center bgWhite flex={false}>
                                <Image style={{ width: 100, height: 100 }} source={require('../../../assets/images/user-profile.png')} />
                            </Block>
                            <Block flex={false} margin={[20, 0, 10, 0]}>
                                <PrimaryButton btnText="Upload Picture" />
                            </Block>
                            <TouchableOpacity>
                                <Text center white>remove image</Text>
                            </TouchableOpacity>
                        </Block>
                        <Text size={27} bold white center>Refered by:</Text>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Name* :</Text>
                            <PrimaryInput
                                placeholder="Enter Name"
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white>Email* :</Text>
                            <PrimaryInput
                                placeholder="Enter Email"
                            />
                        </Block>
                        <Block flex={false} margin={[20, 0]}>
                            <PrimaryButton onPress={()=> Actions.login()} btnText="Registration" />
                        </Block>
                        <TouchableOpacity>
                            <Text white>* marked fields are required, Please fill up this fields ?</Text>
                        </TouchableOpacity>
                        <Block row center middle flex={false} padding={[10, 0]}>
                            <Text style={{ marginRight: 5 }} white>Already have an account ?</Text>
                            <TouchableOpacity onPress={()=> Actions.login()}>
                                <Text white>login here</Text>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </ImageBackground>
            </ScrollView>
        </Block>

    );
}