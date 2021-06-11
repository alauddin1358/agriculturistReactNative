import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 10,
        flex:1
    },
    postBlock: {
        backgroundColor: '#f7f8fb',
        borderRadius: 5,
        elevation: 3,
    },
    postBlock2: {
        backgroundColor: '#f7f8fb',
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
    block: {
        padding: 10,
        marginVertical:10,
        flex:1,
        backgroundColor:colors.white,
        elevation:3,
        borderRadius:5
    },
    ads:{
        width:200,
        height:200,
        resizeMode:'contain'
    },
    expandBlock:{
        borderWidth:1,
        borderColor:colors.borderColor,
        borderRadius:10,
        margin:20,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    extext:{
        color:colors.primaryColor,
        marginRight:10
    },
});

export default styles;
