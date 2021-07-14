import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    ADD_FRIEND_PENDING, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAIL
} from '../constant/friendConstant'

const base_url = Config.base_url

export const addFriendService = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: ADD_FRIEND_PENDING })

    const url = base_url + `/friendReq/${id}`
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
            type: ADD_FRIEND_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: ADD_FRIEND_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}
export const acceptFriendService = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: 'ACCEPT_FRIEND_PENDING' })

    const url = base_url + `//friendReqAccept/${id}`
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
            type: 'ACCEPT_FRIEND_SUCCESS',
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: 'ACCEPT_FRIEND_FAIL',
            payload: error.response,
        })

        callback(null, error.response)
    }
}

export const deleteFriendService = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: 'DELETE_FRIEND_PENDING' })

    const url = base_url + `//friendReqDel/${id}`
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
            type: 'DELETE_FRIEND_SUCCESS',
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: 'DELETE_FRIEND_FAIL',
            payload: error.response,
        })

        callback(null, error.response)
    }
}

export const rmFriendService = (id, callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: 'DELETE_FRIEND_PENDING' })

    const url = base_url + `/rmFriend/${id}`
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
            type: 'DELETE_FRIEND_SUCCESS',
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: 'DELETE_FRIEND_FAIL',
            payload: error.response,
        })

        callback(null, error.response)
    }
}

export const FriendService = ( callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: 'FRIEND_PENDING' })

    const url = base_url + `/friendlist`
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
            type: 'FRIEND_SUCCESS',
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: 'FRIEND_FAIL',
            payload: error.response,
        })

        callback(null, error.response)
        console.log(error.response);
    }
}