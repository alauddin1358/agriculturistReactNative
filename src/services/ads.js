import { Config } from '../config/index'
import httpRequest from '../utils/request'
import auth from '../utils/auth'
import {
    GET_ADS_PENDING, GET_ADS_SUCCESS, GET_ADS_FAIL
} from '../constant/adsConstant'

const base_url = Config.base_url


/**
 * Method: GET
 */


export const fetchAdsService = (callback) => async (
    dispatch,
    getState
) => {
    dispatch({ type: GET_ADS_PENDING })

    const url = base_url + '/get_Advertise'
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
            type: GET_ADS_SUCCESS,
            payload: response,
        })

        callback(response, null)
    } catch (error) {
        dispatch({
            type: GET_ADS_FAIL,
            payload: error.response,
        })

        callback(null, error.response)
    }
}
