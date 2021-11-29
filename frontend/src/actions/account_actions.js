import * as AccountAPI from '../util/account_util'
export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS"
export const RECEIVE_ACCOUNT = "RECEIVE_ACCOUNT"
export const RECEIVE_ACCOUNT_ERRORS = "RECEIVE_ACCOUNT_ERRORS"
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT"
export const CLEAR_ACCOUNT_ERRORS = "CLEAR_ACCOUNT_ERRORS"


export const getAllAccounts = accounts => ({
    type: RECEIVE_ACCOUNTS,
    accounts
})

export const getAccount = account => ({
    type: RECEIVE_ACCOUNT,
    account
})

export const receiveAccountErrors = errors => ({
    type: RECEIVE_ACCOUNT_ERRORS,
    errors
})

export const removeAccount = accountId => ({
    type: REMOVE_ACCOUNT,
    accountId
})

export const clearAccountErrors = () => ({
    type: CLEAR_ACCOUNT_ERRORS
})

export const fetchAllAccounts = userId => dispatch => {
    return AccountAPI.fetchAllAccounts(userId).then( accounts => dispatch( getAllAccounts(accounts) ) )
}

export const fetchAccount = accountId => dispatch => {
    return AccountAPI.fetchAccount(accountId).then( account => dispatch( getAccount(account) ) )
}

export const createAccount = account => dispatch => {
    return AccountAPI.createAccount(account)
    .then( account => dispatch( getAccount(account) ) )
    .catch( err => dispatch(receiveAccountErrors(err.response.data)))
}

export const updateAccount = account => dispatch => {
    return AccountAPI.updateAccount(account)
    .then( account => dispatch( getAccount(account) ) )
    .catch( err => dispatch(receiveAccountErrors(err.response.data)))
}

export const deleteAccount = accountId => dispatch => {
    return AccountAPI.deleteAccount(accountId).then( () => dispatch( removeAccount(accountId) ) )
}