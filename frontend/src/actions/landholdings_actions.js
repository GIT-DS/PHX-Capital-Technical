import * as LandHoldingAPI from '../util/landholding_util'
export const RECEIVE_LANDHOLDINGS = "RECEIVE_LANDHOLDINGS"
export const RECEIVE_LANDHOLDING = "RECEIVE_LANDHOLDING"
export const REMOVE_LANDHOLDING = "REMOVE_LANDHOLDING"


export const getAllLandHoldings = landholdings => ({
    type: RECEIVE_LANDHOLDINGS,
    landholdings
})

export const getLandHolding = landholding => ({
    type: RECEIVE_LANDHOLDING,
    landholding
})

export const removeLandHolding = landholdingId => ({
    type: REMOVE_LANDHOLDING,
    landholdingId
})
export const fetchAllLandHoldings = accountId => dispatch => {
    return LandHoldingAPI.fetchAllLandHoldings(accountId).then( landholdings => dispatch( getAllLandHoldings(landholdings) ) )
}

export const fetchLandHolding = landholdingId => dispatch => {
    return LandHoldingAPI.fetchLandHolding(landholdingId).then( landholding => dispatch( getLandHolding(landholding) ) )
}

export const createLandHolding = landholding => dispatch => {
    return LandHoldingAPI.createLandHolding(landholding).then( landholding => dispatch( getLandHolding(landholding) ) )
}

export const editLandHolding = landholding => dispatch => {
    return LandHoldingAPI.editLandHolding(landholding).then( landholding => dispatch( getLandHolding(landholding) ) )
}

export const deleteLandHolding = landholdingId => dispatch => {
    return LandHoldingAPI.deleteLandHolding(landholdingId).then( () => dispatch( removeLandHolding(landholdingId) ) )
}