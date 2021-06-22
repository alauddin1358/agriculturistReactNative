import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_COMMENT_PENDING, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL,
    POST_COMMENT_PENDING, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL
} from '../constant/commentConstant'

const base_url = Config.base_url


/**
 * Method: GET
 */


export const fetchCommentService = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_COMMENT_PENDING })

    const url = base_url + `/comments/${id}`
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
            type: GET_COMMENT_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_COMMENT_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}


/**
 * Method: POST
 */


export const postCommentService = (id, cmntBody, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: POST_COMMENT_PENDING })

    const url = base_url + `/comments/${id}`
    const token = await auth.getToken('accessToken')

    const body = {
        cmntBody
    }
    const options = {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        const response = await httpRequest.post(
            url,
            true,
            token,
            body,
            options
        )

        dispatch({
            type: POST_COMMENT_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: POST_COMMENT_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}


/**
 * Method: POST
 */


export const updateCommentService = (postId, commentId, cmntBody, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: POST_COMMENT_PENDING })

    const url = base_url + `/update_comment/${postId}/${commentId}`
    const token = await auth.getToken('accessToken')

    const body = {
        cmntBody 
    }

    // const options = {
    //     "Accept": 'application/json',
    //     'Content-Type': 'application/json',
    // };

    try {
        const response = await httpRequest.put(
            url,
            true,
            token,
            body,
            // options
        )

        dispatch({
            type: POST_COMMENT_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: POST_COMMENT_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}
