import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
   sidebar:{
       backgroundColor:colors.primaryColor,
       alignItems:'center'
   },
   img:{
       width:80,
       height:80,
       marginTop:30,
       resizeMode:'contain'
   },
   posts:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'25%',
       left:100
   },
   friends:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'48%',
       left:100
   },
   files:{
       backgroundColor:colors.white,
       padding:10,
       borderRadius:5,
       elevation:3,
       position:'absolute',
       top:'37%',
       left:100
   },
});

export default styles;
