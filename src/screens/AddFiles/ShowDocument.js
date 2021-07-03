import React, { useEffect, useState } from "react"
import { TouchableOpacity, FlatList } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { fetchFilesService } from '../../services/file'
import { colors } from "../../styles/theme"
import { useDispatch } from "react-redux"
import { Loader } from "../../components/Loader"
import RNFetchBlob from 'rn-fetch-blob'
import { Config } from "../../config"


export default ShowDocument = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState([])

    console.log('files', files);

    useEffect(() => {
        getFiles()
    }, [])

    const getFiles = () => {
        dispatch(fetchFilesService((res, err) => {
            setLoading(false)
            setFiles(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }

    const renderFiles = ({ item, index }) => (
        <Block style={styles.table}>
            <Text style={styles.td}>{item.title}</Text>
            <Text style={styles.td}>{item.desc}</Text>
            <TouchableOpacity style={styles.td}>
                <Text color={colors.primaryColor}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.td} onPress={() => downloadFile(item.filename)}>
                <Text color={colors.primaryColor}>Download</Text>
            </TouchableOpacity>
        </Block>
    )


    const downloadFile = (filename) => {
        const { config, fs } = RNFetchBlob
        let PictureDir = fs.dirs.PictureDir
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: false,
                path: PictureDir + "/ag_" + new Date(),
                description: 'Downloading image.'
            }
        }

        config(options).fetch('GET', Config.base_url + `/file/${filename}`).then((res) => {
            console.log('File downloaded')
        })
    }


    return (

        <Block block padding={[30, 0]}>
            <Block style={styles.table}>
                <Text style={styles.td}>Title</Text>
                <Text style={styles.td}>Description</Text>
                <Text style={styles.td}>View File</Text>
                <Text style={styles.td}>Download File</Text>
            </Block>

            {
                loading ? <Loader /> :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={files}
                        renderItem={renderFiles}
                        keyExtractor={item => item._id.$oid.toString()}
                    />
            }

        </Block>

    );
}