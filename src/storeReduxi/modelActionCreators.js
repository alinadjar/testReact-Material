import {STORE, UPDATE, DELETE} from './modelActionTypes';

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