import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_ALL_USER_PENDING, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL,
    UPDATE_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    GET_USER_INFO_PENDING, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL,
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
        console.log('error', error);
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
    dispatch({ type: GET_USER_INFO_PENDING })

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
            type: GET_USER_INFO_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_USER_INFO_FAIL,
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

    const option = {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
    };


    try {
        const response = await httpRequest.put(
            url,
            true,
            token,
            formData,
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
        console.log(error);
    }
}

