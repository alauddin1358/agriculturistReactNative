import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        elevation: 4,
        paddingHorizontal: 20,
    },
    bars: {
        backgroundColor: colors.primaryColor,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: 10,
    },
    application: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    expandAppli: {
        backgroundColor: colors.white,
        elevation: 4,
        marginVertical: 2,
        padding: 10,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 1,
        top: 50,
        width: '95%',
        left: 0
    },
    notifyBlock: {
        backgroundColor: colors.white,
        elevation: 4,
        marginVertical: 2,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 1,
        top: 50,
        width: '85%',
        left: 20
    },
    searchBlock: {
        backgroundColor: colors.white,
        elevation: 4,
        marginVertical: 2,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 1,
        top: 105,
        width: '85%',
        left: 10,
        padding:10,
    },
    avatar:{
        width:50,
        height:50,
        marginRight:20,
        borderRadius:100
    },
    avatar2:{
        width:40,
        height:40,
        marginRight:10,
        borderRadius:100
    },
    singleNotify:{
         paddingVertical: 5, 
         flexDirection: 'row', 
         alignItems: 'center',
         zIndex:99,
         borderBottomWidth:1,
         borderBottomColor:colors.borderColor 
    },
    singleSearch:{
         paddingVertical: 5, 
         flexDirection: 'row', 
         alignItems: 'center',
         zIndex:99,
         borderBottomWidth:1,
         borderBottomColor:colors.borderColor 
    },
    header:{
        backgroundColor:colors.primaryColor,
        padding:5,
        borderRadius:5
    },
    expandSea: {
        backgroundColor: colors.white,
        elevation: 5,
        marginVertical: 2,
        padding: 10,
        marginRight: 40,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 99,
        width: '85%',
        top:53,
        left: 10
    },
    notify:{
        backgroundColor:colors.red,
        borderRadius:100,
        alignItems:'center',
        width:15,
        position:'absolute',
        top:-10,
        right:-5,
        height:15,
        justifyContent:'center'
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        width: '60%',
        height: 30,
        zIndex:9999,
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: colors.primaryColor,
        width: 22,
        padding: 5,
        height: 30
    },
    devide: {
        paddingVertical: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    }
});

export default styles;
