import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL,
    REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_FAIL
} from '../constant/authConstant'

const base_url = Config.base_url

/**
 * Method: POST
 * Login
 * @param {* user email name} email 
 * @param {* user valid password} password 
 * @param {*is function that return reponse data or err in promise} callback
 */

export const loginService = (email, password, callback) => {

    return async (dispatch) => {
        dispatch({ type: LOGIN_PENDING })

        try {
            const response = await postLogin(email, password)

            dispatch({ type: LOGIN_SUCCESS, payload: response })

            callback(response, null)


        } catch (error) {
            callback(null, error.response)
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response,
            })
        }
    }
}


/**
* Method: POST
* login helper 
* @param {*} email 
* @param {*} password 
*/

const postLogin = async (email, password) => {
    let url = base_url + '/login'

    let body = {
        email,
        password,
    }

    const response = await httpRequest.post(url, false, null, body)

    if (response) {
        await auth.setToken('accessToken', response?.data?.data?.token)
        return response?.data
    } else {
        throw Error('login failed')
    }
}



/**
 * Method: POST
 * Registration
 */

export const registrationService = (regBody, callback) => {

    let url = base_url + '/add'

    let body = {
        firstname: regBody.firstName,
        middlename: regBody.middleName,
        lastname: regBody.lastName,
        name: `${regBody.firstName} ${regBody.middleName} ${regBody.lastName}`,
        user_category: regBody.userCategory,
        student_type: regBody.studentType,
        job_type: regBody.jobType,
        specialization_type: regBody.specializationType,
        email: regBody.email,
        phone: regBody.phone,
        password: regBody.password,
        passwordconfirm: regBody.passwordConfirm,
        address: regBody.address,
        country: regBody.country,
        image: regBody.avatar,
        referrer_name: regBody.referrerName,
        referrer_email: regBody.referrerEmail,
    }

    return async (dispatch) => {
        dispatch({ type: REGISTRATION_PENDING })

        try {
            const response = await httpRequest.post(url, false, null, body)

            dispatch({ type: REGISTRATION_SUCCESS, payload: response })
            callback(response, null)

        } catch (error) {
            dispatch({
                type: REGISTRATION_FAIL,
                payload: error.response,
            })
            callback(null, error.response)
        }
    }
}

