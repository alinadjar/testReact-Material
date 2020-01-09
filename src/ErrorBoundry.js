
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorThrown: false,
            error: null,
            info: null
        }
    }


    componentDidCatch = (error, info) => this.setState({
        errorThrown: true,
        error: error,
        info: info
    });
    render() {
        return (
            <React.Fragment>
                {this.state.errorThrown &&
                    <div>
                        <h3 className="bg-danger text-white text-center m-2 p-2">
                            Error Detected
                        </h3>

                        <div>
                            <h1>Oops, something went wrong :(</h1>
                            <p>The error: {this.state.error.toString()}</p>
                            <p>Where it occured: {this.state.info.componentStack}</p>
                        </div>
                    </div>
                }
                {this.props.children}
            </React.Fragment>
        )
    }
}



export default ErrorBoundary;