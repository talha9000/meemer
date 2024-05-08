import axios from "axios";
 const url=process.env.REACT_APP_BASE_URL
 const Instance = axios.create({ baseURL:url});
 


export const getCall = (url, queryParms = {}) => {
    return Instance.get(url, { params: queryParms })
}

export const postCall = (url, body) => {
    return Instance.post(url, body)
}

export const putCall = (url, body) => {
    return Instance.put(url, body)
}

export const delCall = (url, queryParms) => {
    return Instance.delete(url, { params: queryParms })
}
export const patchCall = (url, body) => {
    return Instance.patch(url, body);
}

export default Instance;