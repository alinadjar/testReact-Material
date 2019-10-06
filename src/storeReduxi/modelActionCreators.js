import { STORE, UPDATE, DELETE, ToggleIsLoading, GET_DATA, FETCH_OVERWRITE_DATA, CLEAR_BADGEs } from './modelActionTypes';

export const saveMedal = (m, cb) => ({
    type: STORE,
    payload: m,
    callbk: cb
})



export const updateMedal = (m, cb) => ({
    type: UPDATE,
    payload: m,
    callbk: cb
})


export const deleteMedal = (m, cb) => ({
    type: DELETE,
    payload: m,
    callbk: cb
})



export const getData = () => {
    return {
        type: GET_DATA,
    }
}


export const fetchOverwriteData = (f) => {
    return {
        type: FETCH_OVERWRITE_DATA,
        fxx: f
    }
}

export const clearBadges = () => {
    return {
        type: CLEAR_BADGEs
    }
}

//-------------------------------------------------------------------------
export const toggleStateIsLoading = () => ({
    type: ToggleIsLoading
})