import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    titleBlock: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: colors.white,
        marginVertical: 10
    },
    upload: {
        padding: 40,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderStyle: 'dashed',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    table: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        flexDirection: 'row',
        width: '100%',
    },
    td: {
        width: '20%',
        borderWidth: 1,
        borderColor: colors.borderColor,
        padding: 5,
        height: 50,
        fontSize: 11
    },
});

export default styles;