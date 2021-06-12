import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    btn:{
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        color:colors.textColor,
        paddingHorizontal:20,
        borderRadius:5,
        paddingVertical:5
    }
});

export default styles;
