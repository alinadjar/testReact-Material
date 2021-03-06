import { STORE, UPDATE, DELETE, ToggleIsLoading, CLEAR_BADGEs } from './modelActionTypes';
import { initialData } from './initialData';

export default function (storeData, action) {

    switch (action.type) {
        case STORE:
            return {
                ...storeData,
                badges: storeData.badges.concat([action.payload])
            }
        case UPDATE:
            return {
                ...storeData,
                badges: storeData.badges.map(i => i.id === action.payload.id ? action.payload : i)
            }
        case DELETE:
            return {
                ...storeData,
                badges: storeData.badges.filter(i => i.id !== action.payload.id)
            }
        case CLEAR_BADGEs:
            return {
                ...storeData,
                badges: []
            }
            break;
        case ToggleIsLoading:
            return {
                ...storeData,
                isLoading: !storeData.isLoading
            }

        default:
            return storeData || initialData;
    }


}