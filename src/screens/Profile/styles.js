import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        margin: 10,
        flex:1
    },
    pickerEdit:{
        borderColor:colors.borderColor,
    },
    pickerInner:{
        zIndex:99
    },
    img:{
        width:200,
        height:200,
        alignSelf:'center'
    },
    imgFile:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.borderColor,
        width:'50%',
        padding:10,
        borderRadius:5,
        marginBottom:30
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
        right:10,
        zIndex:2222
    },
});

export default styles;
