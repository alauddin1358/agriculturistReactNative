import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
   sidebar:{
       backgroundColor:colors.primaryColor,
       alignItems:'center'
   },
   img:{
       width:50,
       height:50,
       resizeMode:'contain'
   },
   posts:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'35%',
       left:100
   },
   friends:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'65%',
       left:100
   },
   files:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'50%',
       left:100
   },
});

export default styles;
