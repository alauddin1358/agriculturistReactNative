import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_NOTIFICATION_PENDING, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAIL,
} from '../constant/notificationConstant'

const base_url = Config.base_url


/**
 * Method: GET
 */


export const fetchNotificationService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_NOTIFICATION_PENDING })

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
            type: GET_NOTIFICATION_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_NOTIFICATION_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}
