import  axios from 'axios'

export const fetchAllAccounts = () => {
    return axios.get('/api/accounts')
}

export const fetchAccount = accountId => {
    return axios.get(`/api/accounts/accountId`)
}

export const createAccount = account => {
    return axios.post('/api/accounts/create', account)
}

export const updateAccount = account => {
    return axios.patch(`api/accounts/update/${account.id}`, account)
}

export const deleteAccount = accountId => {
    return axios.delete(`/api/accounts/delete/${accountId}`)
}