import  axios from 'axios';
//const BASE_URL = window.location.origin + ":443/v1/queue/";
const BASE_URL="https://configit-rdm6a-dev4.dev.att.com:443/v1/queue/";
//const BASE_URL = "https://"+window.location.hostname + ":443/v1/queue/";
console.log("BASE_URL is ::: ", BASE_URL);

export const getWhoAMI = (obj) => {
    return axios.post(BASE_URL + "whoAmI", obj)
}

export const getUserIds = (obj) => {
    return axios.post(BASE_URL + "userIds", obj)
}

export const getHealthCheck = (obj) => {
    return axios.post(BASE_URL + "healthCheck", obj)
}

export const getBatchMetaFilterProject = (obj) => {
    console.log("##### getBatchMetaFilterProject", obj);
    return axios.post(BASE_URL + "getBatchMetaFilterProject", obj)
}

export const getBatchMetaFilter = (obj) => {
    return axios.post(BASE_URL + "getBatchMetaFilter", obj)
}


export const getBatchStatistics = (obj) => {
    return axios.post(BASE_URL+ "getBatchStatistics", obj);
}

export const getQueueFilterArray = (obj) => {
    return axios.post(BASE_URL+ "getQueueFilterArray", obj);
}



export const checkQueueStatus = (obj) => {
    return axios.post(BASE_URL + "checkQueueStatus", obj)
}

export const getQueueMetaFilterProject = (obj) => {
    return axios.post(BASE_URL + "getQueueMetaFilterProject", obj)
}

export const deleteFilter = (obj) => {
    return axios.post(BASE_URL + "deleteQueueFilter", obj);
}

export const addQueueBulk = (obj) => {
    return axios.post(BASE_URL + "addQueueBulk", obj);
}

export const updateStatisticsBulk = (obj) => {
    return axios.post(BASE_URL + "setCounterBatch", obj);
}


export const getFilterPackageAll = (obj) => {
    return axios.post(BASE_URL + "getFilterPackageAll", obj)
}

export const deleteBatchItem = (obj) => {
    return axios.post(BASE_URL + "deleteBatch", obj)
}