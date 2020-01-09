import React, { Component } from 'react';
import {connect} from 'react-redux';

import Axios from 'axios';

import { search } from './utils';
import FoodList from './FoodList';
import ErrorBoundary from './ErrorBoundry';

const Tjs = connect(null,null)(
class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            value: '',
            Foods: [],
            ACCESS_TOKEN: null,
            SALOONS: []
        }

        this.BASE_URL = 'http://192.168.87.62:9797/';

        this.selector = {
            load: storeData => storeData.isLoading,
            badge: storeData => storeData.badges[0],
        }

debugger;
        //let storeState = this.props.getState();
        Object.entries(this.selector).forEach((item, index) => { console.log(item); })
        //var result = Object.entries(this.selector).map( ([k ,v]) => [k, v(storeState)] )
        //this.kkk = this.props.store;
    }


    onChangeHandler = e => {
        //e.persist();
        //let target = e.currentTarget;
        //this.setState({ value: target.value });
        //this.setState({value: e.currentTarget.value});
        this.searchFunc(e.target.value);
    };

    searchFunc = async val => {
        this.setState({ loading: true });
        // const res = await search(
        //     `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
        // );
        debugger;
        const res = await search('http://192.168.87.62:9797/api/Sales/GET_PRICES', this.state.ACCESS_TOKEN);
        const foodList = res;

        //this.setState({ foods: foodList, loading: false });
        //this.setState(prev => ({...prev, foods: foodList, loading:false }));
        this.setState({ loading: false }, () => { this.setState({ Foods: foodList }) });
        //this.setStateAsync({loading:false}).then(()=>{alert('dfgdgtfuckj');});

        // new Promise(async (resolve, reject) => {
        //     const res = await search('http://192.168.87.62:9797/api/Sales/GET_PRICES', this.state.ACCESS_TOKEN, (inp)=>{this.setState({foods: inp, loading: false}); console.log('^^^^^^^^^^^^^',inp);});
        //     resolve(res);
        // }).then((inp)=> {console.log('resolved')})




        //console.log('=========############: ',this.state.foods);
    };


    // setStateAsync = (state) => {
    //     return new Promise(
    //         (resolve) => {  this.setState(state, resolve); }
    //         );
    // }



    fetchFoodList = () => {
        let headers = {
            'Content-Type': 'application/json',
            'AccessToken': this.state.ACCESS_TOKEN
        };

        this.setState({ loading: true });


        // setTimeout(() => {
        //     this.setState({loading: false});
        // }, 2000);


        Axios.get(this.BASE_URL + 'api/Sales/GET_PRICES', { headers })
            .then((response) => {
                // handle success

                debugger;
                console.log(response);
                if (response.status === 200) {
                    // this.setState({ Foods: response.data });

                    this.setState(prev => ({ ...prev, loading: false, Foods: response.data }));
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                this.setState({ loading: false });
            })
            .finally(() => {
                // always executed
                //this.setState({ loading: false });
            });
    }




    //   get renderResult() {
    //     let movies = <h1>There's no movies</h1>;
    //     if (this.state.movies) {
    //       movies = <Movies list={this.state.movies} />;
    //     }

    //     return movies;
    //   }

    renderResult = () => {
        debugger;
        let foods = <h1>There're no foods</h1>;
        if (this.state.Foods.length !== 0) {
            foods = <FoodList list={this.state.Foods} />
        }
        return foods;
    }






    componentDidMount() {

       

        // Login to TakhteJamshid API

        let headers = {
            'Content-Type': 'application/json',
            'Authorization': JSON.stringify({ "USERNAME": "1057", "PASSWORD": "1057" })
        };

        this.setState({ loading: true });

        Axios.get(this.BASE_URL + 'api/Sales/Aut', { headers })
            .then((response) => {
                // handle success
                console.log(response);
                if (response.status === 200) {
                    this.setState({ SALOONS: response.data.SALOONS, ACCESS_TOKEN: response.data.ACCESS_TOKEN });
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
                this.setState({ loading: false });
            });
    }


    // handleSearch = async () =>  { await this.searchFunc(5)}


    searchAvailableFood = (e) => {
        let foodName = e.target.value;
        console.log(foodName);
    }

    render() {
        return (
            <div style={{ margin: '50px auto' }}>
                <ErrorBoundary>

                    <h3>TJS page ....</h3>


                    <div style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}>
                        <div>
                            {
                                this.state.loading &&
                                <div className="alert alert-danger" role="alert" >
                                    Loading ....!
                            </div>
                            }
                        </div>
                        <input type="text" className="form-control" placeholder="search food"
                            onChange={e => this.onChangeHandler(e)} />
                    </div>




                    <div className="row" style={{ margin: '2em auto', position: 'fixed', right: 0, width: '20%' }}>
                        {
                            this.state.SALOONS.length !== 0 &&
                            this.state.SALOONS.map(s => {
                                return (
                                    <div key={s.SHO_SALON} className="" style={{ width: '100%', padding: '10px', backgroundColor: '#000b71f5', color: '#FFF', borderRadius: '10px', margin: '5px' }}>
                                        <h4 style={{ textAlign: 'center' }}>{s.NAME_SALON} <span className="badge badge-danger badge-pill">{s.CAPACITY}</span></h4>
                                        <div style={{ margin: '0 auto', width: 'fit-content' }}>
                                            <label>Saloon Number:</label><label>{s.SHO_SALON}</label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="wall">
                        <input type="text" placeholder="جستجوی غذا" onChange={this.searchAvailableFood} />
                    </div>

                    <div className="row" style={{ padding: '20px', border: '2px solid red', margin: '0 auto', marginTop: '5%', width: '50%' }}>
                        {
                            this.state.Foods.length !== 0 &&

                            this.renderResult()

                            // this.state.Foods.map(f => {
                            //     return ( <div>
                            //         <div><h5>{f.NAME}</h5><h5>{f.PRICE}</h5></div>
                            //     </div>)
                            // })
                        }

                        {/* {this.renderResult} */}

                    </div>
                    <button style={{ width: '200px', margin: '0 auto', display: 'block' }} className="form-control btn btn-primary" onClick={this.fetchFoodList}>Fetch Foods</button>


                </ErrorBoundary>
            </div >
        );
    }
}
);

export default Tjs;