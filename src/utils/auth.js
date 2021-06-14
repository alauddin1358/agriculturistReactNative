import { isEmpty } from 'lodash'
import AsyncStorage from '@react-native-community/async-storage'

const TOKEN_KEY = 'accessToken'
const USER_DETAILS = 'userDetails'

const parse = JSON.parse
const stringify = JSON.stringify



const auth = {

    /**
     * Set data in storage
     * @param {String|Object}  value    The data to store
     * @param {String}  key
     */
    async set(key, value) {
        if (isEmpty(value)) {
            return null
        }
        try {
            await AsyncStorage.setItem(key, stringify(value))
        } catch (error) {
            return null
        }
        return null
    },

    setToken(tokenKey = TOKEN_KEY, value = '') {
        return auth.set(tokenKey, value).then(res => res)
    },

    setUserDetails(userDetails = USER_DETAILS, value = {}) {
        return auth.set(userDetails, value).then(res => res)
    },




    /**
     * Returns data from storage
     * @param  {String} key Item to get from the storage
     * @return {String|Object}     Data from the storage
     */
    async get(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value) {
                return parse(value) || null
            }
        } catch (error) {
            return null
        }
        return null
    },

    getToken(tokenKey = TOKEN_KEY) {
        return auth.get(tokenKey).then(res => res).catch(err => err)
    },

    getUserDetails(userDetails = USER_DETAILS) {
        return auth.get(userDetails).then(res => res).catch(err => err)
    },





    /**
     * Remove an item from the used storage
     * @param  {String} key [description]
     */
    async clear(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value) {
                await AsyncStorage.removeItem(key)


                return true
            }
        } catch (error) {
            return false
        }
        return null
    },

    /**
     * Clear all app storage
     */
    async clearAppStorage() {
        await AsyncStorage.clear()
    },

    clearToken(tokenKey = TOKEN_KEY) {
        return auth.clear(tokenKey)
    },

    clearUserDetails(userDetails = USER_DETAILS) {
        return auth.clear(userDetails)
    },

}

export default auth
