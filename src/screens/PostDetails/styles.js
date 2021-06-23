import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
        flex: 1
    },
    postBlock: {
        backgroundColor: '#f7f8fb',
        borderRadius: 5,
        elevation: 3,
    },
    postBlock2: {
        backgroundColor: '#f7f8fb',
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: colors.borderColor
    },
    title: {
        color: colors.primaryColor,
        fontWeight: 'bold',
    },
    post: {
        paddingVertical: 5,
        fontSize: 15,
    },
    block: {
        padding: 10,
        marginVertical: 10,
        flex: 1,
        backgroundColor: colors.white,
        elevation: 3,
        borderRadius: 5
    },
    ads: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    expandBlock: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10,
        margin: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    extext: {
        color: colors.primaryColor,
        marginRight: 10
    },
    input: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        height: 80,
        color: colors.textColor,
        width: '80%',
        borderRadius: 5,
        padding: 5,
        marginVertical: 10
    },
    input2: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        height: 60,
        width: 200,
        color: colors.textColor,
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
    },
    comments: {
        backgroundColor: colors.white,
        elevation: 4,
        padding: 10
    },
    btn: {
        backgroundColor: colors.primaryColor,
        alignSelf: 'flex-end',
        padding: 5,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    btn2: {
        backgroundColor: colors.primaryColor,
        padding: 5,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    btn3: {
        backgroundColor: colors.primaryColor,
        padding: 5,
        width: 100,
        marginRight:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 10
    },
    com: {
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 10,
        width: '70%'
    },
    dot: {
        backgroundColor: "#eee",
        borderRadius: 30,
        width: 10,
        height: 10,
        position: 'relative',
        left: 5,
        top: 2,
    },
    des: {
        textAlign: 'justify'
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
    },
    modalView: {
        margin: 20,
        width:'80%',
        height:200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent:'center',
        elevation:4
    },
    modalText:{
        paddingVertical:10
    },
});

export default styles;
