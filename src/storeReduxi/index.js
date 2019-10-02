import {createStore, applyMiddleware} from 'redux';
import simpleReducer from './simpleReducer';
import { logger } from './logMiddleware';
import { myRestMiddleware } from './RestMiddleare';

import { composeWithDevTools } from 'redux-devtools-extension';





//export default createStore(simpleReducer,  applyMiddleware(logger));

export default createStore(simpleReducer, composeWithDevTools(
    applyMiddleware(logger, myRestMiddleware('http://192.168.87.62:7799/api/Test/Medals/') ),
    // other store enhancers if any
  ));

export {saveMedal, updateMedal, deleteMedal, toggleStateIsLoading, getData, fetchOverwriteData, clearBadges} from './modelActionCreators';



// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools({
//   // Specify custom devTools options
// });
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));



// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
//   // Specify custom devTools options
// ));

// Notice that we are using devToolsEnhancer here rather than composerWithDevTools.
// The key here is that composeWithDevTools is needed when your Redux store needs enhancers. 
// Otherwise, you can just use devToolsEnhancer.