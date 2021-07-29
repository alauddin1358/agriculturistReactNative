import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/theme';

const styles = StyleSheet.create({
    bgImg:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
    },
    loginBlock:{
        borderWidth:1,
        borderColor:colors.white,
        margin:20,
        padding:20,
        borderRadius:10
    },
    logo:{
        width:100,
        height:100,
        resizeMode:'cover'
    },
});

export default styles;
