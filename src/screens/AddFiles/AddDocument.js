import React, { useState } from "react"
import { TextInput, TouchableOpacity } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { SecondaryButton } from '../../components/Button'
import { addFileService } from "../../services/file"
import { useDispatch } from "react-redux"
import DocumentPicker from 'react-native-document-picker';


export default AddDocument = ({ navigation }) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pdf, setPdf] = useState('')
    const [name, setName] = useState('')

    const addFile = () => {
        setLoading(true)
        const formData = {
            title,
            description,
            file: pdf
        }

        dispatch(addFileService(formData, (res, err) => {
            setLoading(false)
        }))
    }

    const onPressDocument = async() =>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
            });
           setPdf(res.uri)
           setName(res.name)
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }


    return (

        <Block flex={false}>
            <Block flex={false} padding={[20, 0, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
            </Block>
            <Block flex={false} padding={[10, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={value => setDescription(value)}
                />
            </Block>
            <TouchableOpacity style={styles.upload} onPress={onPressDocument}>
                <Text textColor>{name ? name : 'Click here to select pdf file'}</Text>
            </TouchableOpacity>
            <SecondaryButton
                btnText="Submit"
                btnStyle={{ width: '40%', marginBottom: 20 }}
                loading={loading}
                onPress={addFile} />
        </Block>

    );
}