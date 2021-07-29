import { validateEmail } from "../../../utils/common"
import Toast from 'react-native-simple-toast'

const checkLoginValidation = (email, password) => {
    if (!email.trim()) {
        Toast.show('Please enter email')
        return false
    } else if (!validateEmail(email.trim())) {
        Toast.show('Please enter a valid email')
        return false
    } else if (!password.trim()) {
        Toast.show('Please enter password')
        return false
    } else {
        return true
    }
}

export default checkLoginValidation