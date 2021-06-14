import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.textColor,
        paddingHorizontal: 30,
        borderRadius: 5,
        paddingVertical: 8
    },
    spinner: {
        marginLeft: 10
    },
});

export default styles;
