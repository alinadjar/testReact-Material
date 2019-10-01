export const logger = store => next => action => {

    console.log('================ Log State Before dispatch: =======================');
    console.log(action);
    console.log(store.getState());

    let result = next(action);

    console.log('================ Log State After dispatch: =======================');
    console.log(store.getState());

    return result;    
}