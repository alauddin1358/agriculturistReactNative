import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_FILES_PENDING, GET_FILES_SUCCESS, GET_FILES_FAIL,
    ADD_FILE_PENDING, ADD_FILE_SUCCESS, ADD_FILE_FAIL,
} from '../constant/fileConstant'

const base_url = Config.base_url



/**
 * Method: GET
 */


export const fetchFilesService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_FILES_PENDING })

    const url = base_url + '/getAllFiles/60b1fbf90f2d2ea3dd2dc72a'
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
            type: GET_FILES_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_FILES_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}

/**
 * Method: POST
 */


export const addFileService = (formData, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: ADD_FILE_PENDING })

    const url = base_url + '/file_upload'
    const token = await auth.getToken('accessToken')

    const option = {
        'Content-Type': 'application/json',
    };


    try {
        const response = await httpRequest.post(
            url,
            true,
            token,
            formData,
            option
        )

        dispatch({
            type: ADD_FILE_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: ADD_FILE_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
        console.log(error);
    }
}