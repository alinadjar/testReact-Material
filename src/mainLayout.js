import React, { Component } from 'react';
import { toggleStateIsLoading } from './storeReduxi';

import { connect } from 'react-redux';

const mapStateToProps = (storeData) => ({
    isNowLoading: storeData.isLoading
})

const mapDispatchToProps = {
    toggleLoading: toggleStateIsLoading
}

export const MAIN = connect(mapStateToProps, mapDispatchToProps)(

    class extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    {this.props.children}

                    {/* <h1> { JSON.stringify(this.props.isNowLoading, null, 2) } </h1> */}

                    {this.props.isNowLoading &&
                        <div style={{ backgroundColor: '#3e85c7db', width: '100%', height: '100%', position: 'fixed', top: 0, opacity: 0.3, zIndex: 9999 }}>
                            <div class="loader"></div>
                        </div>
                    }

                    <button onClick={()=>{ this.props.toggleLoading() }}>toggle</button>                    
                </div>
            );
        }
    }

);

// class MainLayout extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div>
//                 {this.props.children}
//             </div>
//          );
//     }
// }

// export default MainLayout;