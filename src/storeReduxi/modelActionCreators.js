import {STORE, UPDATE, DELETE, ToggleIsLoading} from './modelActionTypes';

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


//-------------------------------------------------------------------------
export const toggleStateIsLoading = () => ({
    type: ToggleIsLoading
})