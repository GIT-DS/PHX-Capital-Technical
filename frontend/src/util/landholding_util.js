import axios from "axios";

export const fetchAllLandHoldings = () => {
    return axios.get('/api/landholdings')
}

export const fetchLandHolding = (landHoldingId) => {
    return axios.get(`/api/landHoldings/${landHoldingId}`)
}

export const createLandHolding = (landHolding) => {
    return axios.post('/api/landHoldings/create', landHolding)
}

export const editLandHolding = landHolding => {
    return axios.patch(`api/landHoldings/update/${landHolding.id}`, landHolding)
}

export const deleteLandHolding = landHoldingId => {
    return axios.delete(`api/landHoldings/delete/${landHoldingId}`)
}