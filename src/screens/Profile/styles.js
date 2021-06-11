import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
        flex:1
    },
    ads:{
        width:200,
        height:200,
        resizeMode:'contain'
    },
    bgImg:{
        width:'100%',
        marginVertical:10,
        height:250,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center'
    },
    block:{
        backgroundColor:colors.white,
        borderRadius:5
    },
    btn:{
        backgroundColor:colors.primaryColor,
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:5
    },
    btn2:{
        backgroundColor:colors.primaryColor,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:5
    },
    camera:{
        position:'absolute',
        top:10,
        right:10
    },
    infoblock:{
        margin:10,
        backgroundColor:colors.white,
        elevation:4,
        borderRadius:5
    },
    edit:{
        position:'absolute',
        top:10,
        right:10
    },
});

export default styles;
