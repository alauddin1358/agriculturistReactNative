import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_ALL_USER_PENDING, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL
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
