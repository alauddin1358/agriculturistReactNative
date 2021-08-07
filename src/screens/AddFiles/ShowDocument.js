import React, { useEffect, useState } from "react"
import { TouchableOpacity, FlatList } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { deleteFileService, fetchFilesService } from '../../services/file'
import { getUserInfoService } from '../../services/user'
import { colors } from "../../styles/theme"
import { useDispatch } from "react-redux"
import { Loader } from "../../components/Loader"
import RNFetchBlob from 'rn-fetch-blob'
import { Config } from "../../config"
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'


export default ShowDocument = (props) => {

    const navigation = useNavigation();

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState([])
    const [userInfo, setUserInfo] = useState(null)
    const [userId, setUserId] = useState(null)


    useEffect(() => {
        getUserInfo()
    }, [])

    useEffect(() => {
        getFiles()
    }, [userInfo])

    const getUserInfo = () => {
        setLoading(true)
        dispatch(getUserInfoService((res, err) => {
            setLoading(false)
            if (res) {
                const repponse = res?.data?.data ? JSON.parse(res.data.data) : {}
                setUserId(repponse._id.$oid)
                setUserInfo(res?.data?.data ? JSON.parse(res.data.data) : [])
            }
        }))
    }

    const getFiles = () => {
        setLoading(true)
        dispatch(fetchFilesService(userInfo?._id?.$oid, (res, err) => {
            setFiles(res?.data?.data ? JSON.parse(res.data.data) : [])
            setLoading(false)
        }))
    }

    const deleteFile = (fileId) => {
        dispatch(deleteFileService(fileId, (res, err) => {
            getFiles()
            Toast.show(res?.data?.result?.message, Toast.LONG)
        }))
    }

    const renderFiles = ({ item, index }) => (
        <Block style={styles.table}>
            <Text style={styles.td}>{item.title}</Text>
            <Text style={styles.td}>{item.desc}</Text>
            <TouchableOpacity style={styles.td} onPress={() => navigation.navigate('pdfScreen', { item })}>
                <Text color={colors.primaryColor}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.td} onPress={() => downloadFile(item.filename)}>
                <Text color={colors.primaryColor}>Download</Text>
            </TouchableOpacity>
                {
                    item?.user?.userId?.$oid == userId && 
                    <TouchableOpacity style={styles.td} onPress={() => deleteFile(item._id.$oid)}>
                        <Text color={colors.red}>Delete</Text>
                    </TouchableOpacity>
                }
        </Block>
    )


    const downloadFile = (filename) => {
        const { config, fs } = RNFetchBlob
        let PictureDir = fs.dirs.PictureDir

        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: PictureDir + "/ag_" + filename,
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
                <Text style={styles.td}>Download</Text>
                <Text style={styles.td}>Delete</Text>
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