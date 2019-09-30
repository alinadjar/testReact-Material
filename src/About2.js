import React, { Component } from 'react';
import Pace from 'react-pace-progress';

import './loader.css';


class About2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPageMounting: true,
            isLoading: false
        }
    }


    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2500));
    }

    load = () => {
        //this.setState({ isLoading: true });
        // fetch().then(()=>{
        //   // deal with data fetched
        //   this.setState({isLoading: false})
        // })

        alert('ready?');
        this.setState({ isLoading: true }, () => {
            
            this.demoAsyncCall().then(() => this.setState({ isLoading: false }));

        });

        //alert('ready?');
        //this.demoAsyncCall().then(() => this.setState({ isLoading: false }));

    }




    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ isPageMounting: false })
        }, 2800);
    }

    render() {

        const { isPageMounting } = this.state;

        if (isPageMounting) {
            return <Pace color="#59F" height="3px" />
        }

        return (
            <div>
                {this.state.isPageMounting ? <Pace color="#59F" height="3px" /> : null}

                <button className="btn btn-primary" onClick={this.load} >click to load</button>

                <h1>About Page content</h1>



                {this.state.isLoading &&
                    <div style={{ backgroundColor: '#3e85c7db', width: '100%', height: '100%', position: 'absolute', top: 0, opacity: 0.3, zIndex: 9999 }}>
                        <div class="loader"></div>
                    </div>
                }
            </div>
        )
    }
}

export default About2;