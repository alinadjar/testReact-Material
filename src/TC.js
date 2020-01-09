
import React, {Component} from 'react';

import dataStore from './storeReduxi';
import { ToggleIsLoading } from './storeReduxi/modelActionTypes';



class TC extends Component {
    constructor(props) {
        super(props);

        this.selector = {
            load: storeData => storeData.isLoading,
            badge: storeData => storeData.badges[0],
        }

        debugger;
        let storeState = dataStore.getState();
        Object.entries(this.selector).forEach(s => console.log(s));

        this.res = Object.entries(this.selector).map(([k, v]) => [k, v(storeState)])
                                     .reduce( (result, [k, v]) => ({...result, [k]:v }) ,{} )


        this.state = {  }
    }


    loadingToggle = () => {
        dataStore.dispatch({ type: ToggleIsLoading });

        setTimeout(() => {
            dataStore.dispatch({ type: ToggleIsLoading});
        }, 5000);
    }


    render() { 
        return (
            <div>
                <h2>Test Connect Page</h2>

                <div>
                    <pre>{JSON.stringify(this.res, null, 2)}</pre>
                </div>

                <button className="btn btn-primary" onClick={this.loadingToggle} >loading start</button>
            </div>
         );
    }
}
 

export default TC;