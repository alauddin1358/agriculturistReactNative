import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
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

    block: {
        padding: 10,
        marginVertical: 10,
        flex: 1,
        backgroundColor: colors.white,
        elevation: 3,
        borderRadius: 5
    },
    titleBlock: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius:10,
        paddingLeft:10,
        marginVertical:10
    },
    BodyBlock: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius:10,
        paddingLeft:10,
        height:200,
        marginVertical:10
    },
});

export default styles;
