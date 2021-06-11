import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        elevation: 4,
        paddingHorizontal: 20,
    },
    bars: {
        backgroundColor: colors.primaryColor,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: 10,
    },
    application: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    expandAppli: {
        backgroundColor: colors.white,
        elevation: 4,
        marginVertical: 2,
        padding: 10,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 99,
        top: 50,
        width: '95%',
        left: 0
    },
    expandSea: {
        backgroundColor: colors.white,
        elevation: 5,
        marginVertical: 2,
        padding: 10,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 99,
        top: 55,
        width: '85%',
        left: 10
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        width: '60%',
        height: 30,
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: colors.primaryColor,
        width: 22,
        padding: 5,
        height: 30
    },
    devide: {
        paddingVertical: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    }
});

export default styles;
