import axios from "axios";

export const fetchAllLandHoldings = () => {
    return axios.get('/api/landholdings')
}

export const fetchLandHolding = (landHoldingId) => {
    return axios.get(`/api/landHolding/${landHoldingId}`)
}

export const createLandHolding = (landHolding) => {
    return axios.post('/api/landHolding/create', landHolding)
}