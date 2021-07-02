import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAIL,
    GET_POST_DETAILS_PENDING, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_FAIL,
    ADD_POST_PENDING, ADD_POST_SUCCESS, ADD_POST_FAIL,
    UPDATE_POST_PENDING, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL,
    DELETE_POST_PENDING, DELETE_POST_SUCCESS, DELETE_POST_FAIL,
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

    const url = base_url + '/getAllPost'
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
        dispatch({
            type: GET_POSTS_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}


/**
 * Method: GET
 */


export const fetchSinglePost = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_POST_DETAILS_PENDING })

    const url = base_url + `/get_post/${id}`
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
            type: GET_POST_DETAILS_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_POST_DETAILS_FAIL,
            payload: error.response,
        })
        console.log(error);
        callback(null, error.response)
    }
}


/**
 * Method: POST
 */


export const addPostService = (id = null, title, body, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: ADD_POST_PENDING })

    const url = base_url + `/posts/${id}`
    const token = await auth.getToken('accessToken')

    const data = {
        body,
        title
    }

    const option = {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
    };


    try {
        const response = await httpRequest.post(
            url,
            true,
            token,
            JSON.stringify(data),
            option
        )

        dispatch({
            type: ADD_POST_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: ADD_POST_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}


/**
 * Method: Update
 */


export const updatePostService = (postId, formData, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: UPDATE_POST_PENDING })

    const url = base_url + `/posts/${postId}`
    const token = await auth.getToken('accessToken')

    const option = {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        const response = await httpRequest.post(
            url,
            true,
            token,
            JSON.stringify(formData),
            option,
        )

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        console.log('error', error);
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}

/**
 * Method: DELETE
 */


export const deletePostService = (postId, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: DELETE_POST_PENDING })

    const url = base_url + `/delete_post/${postId}`
    const token = await auth.getToken('accessToken')

    try {
        const response = await httpRequest.delete(
            url,
            true,
            token,
        )

        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: DELETE_POST_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}