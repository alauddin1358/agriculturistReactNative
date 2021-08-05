import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    ADD_FRIEND_PENDING,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL,
    ACCEPT_FRIEND_PENDING,
    ACCEPT_FRIEND_SUCCESS,
    ACCEPT_FRIEND_FAIL,
} from '../constant/friendConstant'

const base_url = Config.base_url

export const addFriendService = (id, callback) => async(
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

export const acceptFriendService = (id, callback) => async(
    dispatch,
    getState
) => {
    dispatch({ type: ACCEPT_FRIEND_PENDING })

    const url = base_url + `/friendReqAccept/${id}`
    const token = await auth.getToken('accessToken')

    try {
        const response = await httpRequest.post(
            url,
            true,
            token,
            false,
            null
        )

        dispatch({
            type: ACCEPT_FRIEND_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: ACCEPT_FRIEND_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}