import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_ALL_USER_PENDING, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL,
    UPDATE_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
} from '../constant/userConstant'

const base_url = Config.base_url

/**
 * Method: GET
 */


export const getUsersService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_ALL_USER_PENDING })

    const url = base_url + `/getAllUser`
    const token = await auth.getToken('accessToken')

    try {
        const response = await httpRequest.get(
            url,
            true,
            token,
            false,
            null
        )

        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_ALL_USER_FAIL,
            payload: error.response,
        })
        console.log(error);
        callback(null, error.response)
    }
}
/**
 * Method: GET
 */


export const getUserInfoService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: 'GET__USER__INFO_PENDING' })

    const url = base_url + `/user`
    const token = await auth.getToken('accessToken')

    try {
        const response = await httpRequest.get(
            url,
            true,
            token,
            false,
            null
        )

        dispatch({
            type: 'GET__USER__INFO_SUCCESS',
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: 'GET__USER__INFO_FAIL',
            payload: error.response,
        })
        console.log(error);
        callback(null, error.response)
    }
}

/**
 * Method: POST
 */


export const updatePersonalInfoService = (id, formData, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: UPDATE_USER_PENDING })

    const url = base_url + `/update/${id}`
    const token = await auth.getToken('accessToken')

    const data = {
        firstname: formData.firstname,
        middlename: formData.middlename,
        lastname: formData.lastname,
        user_category: formData.userCategory,
        student_type: formData.studentType,
        job_type: formData.jobType,
        specialization_type: formData.specializationType,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        country: formData.country,
        image: formData.image,
    }

    const option = {
        'Content-Type': 'application/json',
    };


    try {
        const response = await httpRequest.put(
            url,
            true,
            token,
            JSON.stringify(data),
            option
        )

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}

