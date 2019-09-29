import {createStore} from 'redux';
import simpleReducer from './simpleReducer';

export default createStore(simpleReducer);

export {saveMedal, updateMedal, deleteMedal} from './modelActionCreators';