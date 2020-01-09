import Axios from 'axios';


const makeRequest = () => {

    //let token;

    return async (query, accessToken, cb) =>{
        // if(token){
        //     token.cancel();
        // }

        // token = Axios.CancelToken.source();

        try{
            const res = await Axios.request({
                url: query, 
                headers:{'AccessToken': accessToken},
                //cancelToken: token.token    
            });
            debugger;
            const result = res.data;
            //cb(result);
            return result;

        } catch(error){
            if(Axios.isCancel(error)) {
                // Handle if request was cancelled
                console.log('Request canceled', error.message);
              } else {
                // Handle usual errors
                console.log('Something went wrong: ', error.message)
              }
        }
    }

}

export const  search = makeRequest()