import { RestDataSource } from "../webservice/RestDataSource"
import { GET_DATA, STORE, UPDATE, DELETE, FETCH_OVERWRITE_DATA, CLEAR_BADGEs } from "./modelActionTypes";

export const myRestMiddleware = (apiURL) => {

    const _datasource = new RestDataSource(apiURL, () => { });

    return ({ dispatch, getState }) => next => action => {

        switch (action.type) {
            case GET_DATA:
                if (getState().badges.length === 0) {
                    _datasource.GetData(data => {
                        data.forEach(element => {
                            next({
                                type: STORE,
                                payload: element
                            })
                        });
                    });
                }
                break;
            case FETCH_OVERWRITE_DATA:
                next({ type: CLEAR_BADGEs });

                

                _datasource.GetData(data => {
                    
                    // fxx is the sender callback
                    action.fxx(data);
                    
                    data.forEach(element => {
                        next({
                            type: STORE,
                            payload: element
                        })
                    });
                });
                break;
            case STORE:
                debugger;
                _datasource.Store(action.payload, data => {
                    action.callbk();
                    next({
                        //type: STORE,
                        ...action,
                        payload: data
                    })
                });
                break;
            case UPDATE:
                    //debugger;
                _datasource.Update(action.payload, data => {

                    action.callbk();
                    next({
                        //type: UPDATE,
                        ...action,
                        payload: data
                    });
                    
                });
                break;
            case DELETE:
                //debugger;

                
                _datasource.Delete(action.payload,
                    () => { 
                        action.callbk();
                        next(action) ;
                    });
                break;
            default:
                next(action);
        }

    }
}