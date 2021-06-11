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
    input:{
        borderWidth:1,
        borderColor:colors.borderColor,
        height:80,
        borderRadius:5,
        padding:5,
        marginVertical:10
    },
    comments:{
        backgroundColor:colors.white,
        elevation:4,
        padding:10
    },
    btn:{
        backgroundColor:colors.primaryColor,
        alignSelf:'flex-end',
        padding:5,
        borderRadius:5
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:100,
        marginRight:10
    },
    com:{
        backgroundColor:"#5020c8",
        padding:10,
        borderRadius:10,
        width:'70%'
    },
    dot:{
        backgroundColor:"#5020c8",
        borderRadius:30,
        width:10,
        height:10,
        position:'relative',
        left:5,
        top:2,
    },
});

export default styles;
