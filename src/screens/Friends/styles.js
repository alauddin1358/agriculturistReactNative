import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
        flex:1
    },
    postBlock: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 3,
    },
    postBlock2: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: colors.borderColor
    },
    title: {
        color: colors.primaryColor,
        fontWeight: 'bold',
    },
    post: {
        paddingVertical:5,
        fontSize:15
    },
  
    ads:{
        width:200,
        height:200,
        resizeMode:'contain'
    },
    styleBlock:{
        backgroundColor:colors.white,
        padding:10,
        margin:5,
        elevation:4,
        marginTop:20
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100,
        marginBottom:10
    },
    btn:{
        backgroundColor:colors.primaryColor,
        width:'35%',
        alignItems:'center',
        padding:5,
        borderRadius:5,
        marginTop:10
    },
});

export default styles;
