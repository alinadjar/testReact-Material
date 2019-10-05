
import React, { Component } from 'react';

class ModalTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                { id: 1, first: 'Alex', last: 'Mahoon' },
                { id: 2, first: 'Paul', last: 'Audelestin' },
                { id: 3, first: 'Dominic', last: 'Parcel' },
            ],

            selectedID: 3,
            selectedPERSON : null,
        }
    }


    onClickRow = (personId) => {
        this.setState({
            selectedID: this.state.selectedID == personId ? null : personId
        });
    }


    closeModal = () => {
        this.setState({selectedID : null, selectedPERSON:null});
    }


    setModalBody = () => {

        
        //debugger;
        if (this.state.selectedID) {
            this.state.selectedPERSON = this.state.people.filter(p => p.id === this.state.selectedID);
        }


        const cssStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: '#7f92f387',
            width: '100%',
            height:'100%'
        };



        let modalBody = (this.state.selectedPERSON === null || this.state.selectedPERSON === undefined) ? null :
            (<div className="mymodal" id="exampleModal" style={cssStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.state.selectedPERSON[0].first}</h5>
                            <button type="button" className="close" onClick={()=>{this.closeModal()}} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.selectedPERSON[0].last}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="mymodal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>)
            ;

        return modalBody;

    }


    render() {
        return (

            <React.Fragment>
                <div className="container" >

                    <table className="table table-hover" style={{ margin: '0 auto', marginTop: '3em', width: '50%' }}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.people.map(p =>
                                    <tr key={p.id}>
                                        <td scope="row">{p.id}</td>
                                        <td>{p.first}</td>
                                        <td>{p.last}</td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {this.setModalBody()}

                </div>
            </React.Fragment>
        );
    }
}

export default ModalTable;