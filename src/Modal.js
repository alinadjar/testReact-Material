import React, { Component } from 'react';
import ReactDOM from 'react-dom'


const modalRoot = document.getElementById('rootModal');



class MODAL extends Component {
    constructor(props) {
        super(props);


        this.el = document.createElement('div');


        this.state = {}
    }

    componentWillMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }


    render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            <div style={{ backgroundColor: '#70bae2d4', width: '100%', height: '100%', position: 'fixed', top:0 }}>
                <div style={{borderRadius: '10px', padding: '10px', 
                             backgroundColor:'#FFF', display:'block', margin:'10% auto', width:'60%',
                             boxShadow:'0 0.5rem 1rem rgba(0,0,0,0.4)'}}>
                    {this.props.children}
                </div>
            </div>,
            // A DOM element
            this.el,
        );
    }


}

export default MODAL;