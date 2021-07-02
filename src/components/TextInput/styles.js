import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:colors.white,
        width:'100%',
        color:'#d2d2d2',
        marginVertical:5
    },
    profileInput:{
        borderWidth:1,
        borderColor:colors.borderColor,
        width:'100%',
        backgroundColor:colors.white,
        color:'#d2d2d2',
        borderRadius:5,
        marginVertical:5
    },
});

export default styles;
