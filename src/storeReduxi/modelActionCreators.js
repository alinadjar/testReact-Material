import { STORE, UPDATE, DELETE, ToggleIsLoading, GET_DATA, FETCH_OVERWRITE_DATA, CLEAR_BADGEs } from './modelActionTypes';

export const saveMedal = (m) => ({
    type: STORE,
    payload: m
})



export const updateMedal = (m) => ({
    type: UPDATE,
    payload: m
})


export const deleteMedal = (m) => ({
    type: DELETE,
    payload: m
})



export const getData = () => {
    return {
        type: GET_DATA,
    }
}


export const fetchOverwriteData = () => {
    return {
        type: FETCH_OVERWRITE_DATA,
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