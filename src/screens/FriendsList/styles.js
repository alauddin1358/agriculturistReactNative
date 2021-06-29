import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
        flex: 1
    },
    postBlock: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 3,
    },
    postBlock2: {
        backgroundColor: '#fff',
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
        fontSize: 15
    },

    ads: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    styleBlock: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 5,
        elevation: 4,
        marginTop: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10
    },
    btn: {
        backgroundColor: colors.primaryColor,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 15,
        width:140,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default styles;
