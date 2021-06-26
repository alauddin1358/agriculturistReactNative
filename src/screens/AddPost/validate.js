import Toast from 'react-native-simple-toast'

const checkPostValidation = (title, body) => {
    if (!title.trim()) {
        Toast.show('Please enter title')
        return false
    } else if (!body.trim()) {
        Toast.show('Please enter body')
        return false
    } else {
        return true
    }
}

export default checkPostValidation