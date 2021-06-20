import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAIL
} from '../constant/postConstant'

const base_url = Config.base_url


/**
 * Method: GET
 */


export const fetchPostsService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_POSTS_PENDING })

    let url = base_url + '/getAllPost'
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
            type: GET_POSTS_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        console.log('error', error);
        dispatch({
            type: GET_POSTS_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}
