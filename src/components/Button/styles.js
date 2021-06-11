import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    centerBtn:{
        backgroundColor:colors.primaryColor,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        width:170,
        borderWidth:5,
        height:80,
        marginTop:15,
        borderColor:colors.secondaryColor
    },
    centerBtnList:{
        backgroundColor:colors.primaryColor,
        alignItems:'center',
        borderRadius:10,
        width:355,
        flexDirection:'row',
        borderWidth:5,
        height:50,
        paddingLeft:10,
        marginTop:7,
        elevation:4,
        borderColor:colors.secondaryColor
    },
    centerBtnList2:{
        backgroundColor:colors.primaryColor,
        alignItems:'center',
        borderRadius:10,
        width:280,
        flexDirection:'row',
        borderWidth:5,
        height:50,
        paddingLeft:10,
        marginTop:7,
        elevation:3,
        borderColor:colors.secondaryColor
    },
    bottomBtn:{
        backgroundColor:colors.primaryColor,
        width:'100%',
        height:70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:5,
        marginTop:15,
        borderColor:colors.secondaryColor
    },
});

export default styles;
