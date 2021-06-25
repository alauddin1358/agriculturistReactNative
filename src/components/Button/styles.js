import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.textColor,
        borderRadius: 5,
        paddingVertical: 8,
        width:'100%'
    },
    secondbtn: {
        flexDirection: 'row',
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white,
        borderRadius: 5,
        paddingVertical: 8,
        width:'100%'
    },
    spinner: {
        marginLeft: 10
    },
});

export default styles;
