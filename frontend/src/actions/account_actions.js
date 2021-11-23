import * as AccountAPI from '../util/account_util'
export const FETCH_ACCOUNTS = "FETCH_ACCOUNTS"
export const FETCH_ACCOUNT = "FETCH_ACCOUNT"
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT"


export const getAllAccounts = accounts => ({
    type: FETCH_ACCOUNTS,
    accounts
})

export const getAccount = account => ({
    type: FETCH_CATEGORY,
    account
})

export const removeAccount = accountId => ({
    type: REMOVE_ACCOUNT,
    accountId
})
export const fetchAllAccounts = () => dispatch => {
    return AccountAPI.fetchAllAccounts().then( accounts => dispatch( getAllAccounts(accounts) ) )
}

export const fetchAccount = accountId => dispatch => {
    return AccountAPI.fetchAccount(accountId).then( account => dispatch( getAccount(account) ) )
}

export const createAccount = account => dispatch => {
    return AccountAPI.createAccount(account).then( account => dispatch( getAccount(category) ) )
}

export const deleteAccount = accountId => dispatch => {
    return AccountAPI.deleteAccount(accountId).then( () => dispatch( removeAccount(accountId) ) )
}