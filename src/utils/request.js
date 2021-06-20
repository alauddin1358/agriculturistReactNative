import axios from "axios"

let defaultOptions
const client = (token = null) => {

    return {

        get: (url, tokenNeed, token, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...options
                },
            }

            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })
            }

            return axios.get(url, { ...defaultOptions })
        },





        post: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    "Accept": 'application/json',
                    // 'Content-Type': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    ...options
                },
            }

            console.log('defaultOptions', defaultOptions);

            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })
            }

            return axios.post(url, data, { ...defaultOptions })

        },





        put: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...options
                },
            }

            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })

            }

            return axios.put(url, data, { ...defaultOptions })
        },





        patch: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...options
                },
            }

            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })
            }

            return axios.patch(url, data, { ...defaultOptions })
        },





        delete: (url, tokenNeed, token, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...options
                },
            }

            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })
            }

            return axios.delete(url, { ...defaultOptions })
        },
    }
}
const httpRequest = client(null)
export default httpRequest
