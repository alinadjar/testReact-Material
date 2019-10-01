import {createStore, applyMiddleware} from 'redux';
import simpleReducer from './simpleReducer';
import { logger } from './logMiddleware';



export default createStore(simpleReducer, applyMiddleware(logger));

export {saveMedal, updateMedal, deleteMedal, toggleStateIsLoading} from './modelActionCreators';