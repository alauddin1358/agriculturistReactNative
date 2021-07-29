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
   picker:{
       backgroundColor:'rgba(0,0,0,0.0)',
       borderWidth:0,
       borderBottomWidth:1,
       borderBottomColor:colors.white
   },
   pickerInner:{
       backgroundColor:colors.primaryColor
   },
   avatar:{
       width:130,
       height:130,
       borderRadius:100,
       borderWidth:4,
       alignSelf:'center',
       marginVertical:10,
       borderColor:colors.primaryColor
   },
});

export default styles;
