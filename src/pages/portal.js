import React, { Component } from 'react';
import MODAL from '../Modal';



class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    handleShow = () => {
        this.setState({ showModal: true });
    }

    handleHide = () => {
        this.setState({ showModal: false });
    }



    render() {

        const modal = this.state.showModal ? (
            <MODAL>
                <div>
                    <div>
                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                     </div>
                    This is being rendered inside the #modal-container div.
                    <button onClick={this.handleHide}>Hide modal</button>
                </div>

                

            </MODAL>
        ) : null;



        return (
            <div>

{/* <button className="showkkk">ShowModal</button>
<button className="closekkk">CloseModal</button> */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


                <h1>Portal page</h1>
                This div has overflow: hidden.

                <button onClick={this.handleShow}>Show modal</button>
                {modal}
            </div>
        );


    }
}

export default Portal;