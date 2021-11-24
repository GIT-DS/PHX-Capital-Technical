import * as LandHoldingAPI from '../util/landholding_util'
export const RECEIVE_LANDHOLDINGS = "RECEIVE_LANDHOLDINGS"
export const RECEIVE_LANDHOLDING = "RECEIVE_LANDHOLDING"
export const REMOVE_LANDHOLDING = "REMOVE_LANDHOLDING"


export const getAllLandHoldings = accounts => ({
    type: RECEIVE_LANDHOLDINGS,
    accounts
})

export const getLandHolding = account => ({
    type: RECEIVE_LANDHOLDING,
    account
})

export const removeLandHolding = accountId => ({
    type: REMOVE_LANDHOLDING,
    accountId
})
export const fetchAllLandHoldings = () => dispatch => {
    return LandHoldingAPI.fetchAllLandHoldings().then( accounts => dispatch( getAllLandHoldings(accounts) ) )
}

export const fetchLandHolding = accountId => dispatch => {
    return LandHoldingAPI.fetchLandHolding(accountId).then( account => dispatch( getLandHolding(account) ) )
}

export const createLandHolding = account => dispatch => {
    return LandHoldingAPI.createLandHolding(account).then( account => dispatch( getLandHolding(account) ) )
}

export const deleteLandHolding = accountId => dispatch => {
    return LandHoldingAPI.deleteLandHolding(accountId).then( () => dispatch( removeLandHolding(accountId) ) )
}