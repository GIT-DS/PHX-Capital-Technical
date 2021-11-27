import * as AccountAPI from '../util/account_util'
export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS"
export const RECEIVE_ACCOUNT = "RECEIVE_ACCOUNT"
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT"


export const getAllAccounts = accounts => ({
    type: RECEIVE_ACCOUNTS,
    accounts
})

export const getAccount = account => ({
    type: RECEIVE_ACCOUNT,
    account
})

export const removeAccount = accountId => ({
    type: REMOVE_ACCOUNT,
    accountId
})
export const fetchAllAccounts = userId => dispatch => {
    return AccountAPI.fetchAllAccounts(userId).then( accounts => dispatch( getAllAccounts(accounts) ) )
}

export const fetchAccount = accountId => dispatch => {
    return AccountAPI.fetchAccount(accountId).then( account => dispatch( getAccount(account) ) )
}

export const createAccount = account => dispatch => {
    return AccountAPI.createAccount(account).then( account => dispatch( getAccount(account) ) )
}

export const updateAccount = account => dispatch => {
    return AccountAPI.updateAccount(account).then( account => dispatch( getAccount(account) ) )
}

export const deleteAccount = accountId => dispatch => {
    return AccountAPI.deleteAccount(accountId).then( () => dispatch( removeAccount(accountId) ) )
}