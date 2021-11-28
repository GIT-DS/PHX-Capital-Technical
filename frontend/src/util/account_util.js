import  axios from 'axios'

export const fetchAllAccounts = userId => {
    return axios.get(`/api/accounts/${userId}/find`)
}

export const fetchAccount = accountId => {
    return axios.get(`/api/accounts/${accountId}`)
}

export const createAccount = account => {
    return axios.post('/api/accounts/create', account)
}

export const updateAccount = account => {
    console.log(account)
    return axios.patch(`api/accounts/update/${account._id}`, account)
}

export const deleteAccount = accountId => {
    return axios.delete(`/api/accounts/delete/${accountId}`)
}