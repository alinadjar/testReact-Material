
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveMedal, updateMedal, deleteMedal, fetchOverwriteData, toggleStateIsLoading } from '../storeReduxi';


const mapStateToProps = storeData => ({
    medals: storeData.badges
})

const mapDispatchToProps = {
    newMedal: saveMedal,
    modifyMedal: updateMedal,
    removeMedal: deleteMedal,
    fetchData: fetchOverwriteData,
    toggleLoading: toggleStateIsLoading
}

const TrEdit = connect(mapStateToProps, mapDispatchToProps)(

    class extends Component {
        constructor(props) {
            super(props);

            //this.selectedObj= null;
            this.state = {
                modalType : null, // 'EDIT' or 'DELETE' or 'NEW';
                formData: {
                    id: "",
                    name: "", 
                    price: ""
                }
            }
        }

        onRowEdit = (medalId) => {

            //debugger;
            this.setState(prev => ({
                
                ...prev,
                formData:{
                    ...prev.formData, id:medalId
                },
                modalType : 'EDIT',
                
            }));

            Object.assign(this.state.formData, this.props.medals.filter(p => p.id === medalId)[0]);

            // this.setState(p => ({modalType : 'EDIT', state.formData.id : medalId}));
            // this.setState({
            //     selectedID: this.state.selectedID == medalId ? null : medalId
            // });


        }

        onRowDelete = (medalId) => {

            //debugger;

            

            this.setState(prev => ({
                
                ...prev,
                modalType : 'DELETE',
                formData:{
                    ...prev.formData, id:medalId
                },
                
                
            }));
            Object.assign(this.state.formData, this.props.medals.filter(p => p.id === medalId)[0]);


            // this.setState({
            //     selectedID: this.state.selectedID == medalId ? null : medalId
            // });
        }

        closeModal = () => {
            this.setState(prev => ({ 
                ...prev,
                modalType : null,
                formData: {
                    ...prev.formData, id:"", name:"", price:""
                },
            }));            
        }

        handleChange = (ev) => {
            ev.persist();
            debugger;
            // this.setState(prev => ({ 
            //     ...prev,
            //     formData:{
            //         ...prev.formData,
            //         [ev.target.name] :  ev.target.value
            //     }
            // }));
            this.setState(state => state.formData[ev.target.name] =  ev.target.value);
            //this.selectedObj[ev.target.name] =  ev.target.value;
        }

        setModalBody = () => {

            debugger;
            //let selectedMedal = this.props.medals.filter(p => p.id === this.state.selectedID)[0];
            

            const cssStyle = {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                backgroundColor: '#7f92f387',
                width: '100%',
                height: '100%'
            };

            let modalBody = null;

            if (this.state.modalType === 'EDIT') {
                 if (this.state.formData.id === null || this.state.formData.id === undefined ){
                    modalBody = null;
                 } else{

                    

                 
                    modalBody = (                       
                    <div className="mymodal" id="exampleModal" style={cssStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="exampleModalLabel" style={{ color: '#05F' }}>Editing ...</h4>
                                    <button type="button" className="close" onClick={() => { this.closeModal() }} data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={this.state.formData.name} onChange={this.handleChange} />
                                    <label>Price</label>
                                    <input className="form-control" name="price" value={this.state.formData.price} onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => {this.submitEdit(this.state.formData) }} data-dismiss="mymodal">Submit</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="mymodal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }
            }
            else if (this.state.modalType === 'DELETE') {
                modalBody = (this.state.formData.id === null || this.state.formData.id === undefined ) ? null :
                    (<div className="mymodal" id="exampleModal" style={cssStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" onClick={() => { this.closeModal() }} data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h3 style={{ color: '#F00' }}>Sure to Delete?</h3>
                                    <h5>{this.state.formData.name}</h5>
                                    <h5>{this.state.formData.price}</h5>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => {this.submitDelete(this.state.formData)}} data-dismiss="mymodal">Submit</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="mymodal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>);
            }
            else if (this.state.modalType === 'NEW') {
                modalBody =
                    (<div className="mymodal" id="exampleModal" style={cssStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="exampleModalLabel" style={{ color: '#05F' }}>Editing ...</h4>
                                    <button type="button" className="close" onClick={() => { this.closeModal() }} data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label>ID</label>
                                    <input className="form-control" name="id" onChange={this.handleChange} value={this.state.formData.id} placeholder='id' />
                                    <label>Name</label>
                                    <input className="form-control" name="name" onChange={this.handleChange} value={this.state.formData.name} placeholder='medal Name' />
                                    <label>Price</label>
                                    <input className="form-control" name="price" onChange={this.handleChange} value={this.state.formData.price} placeholder='medal price' />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => {this.submitADD(this.state.formData)}} data-dismiss="mymodal">Submit</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="mymodal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>);
            }


            return modalBody;
        }

        submitEdit = (inputObj) => {
            console.log(inputObj);
            this.closeModal();

            this.props.toggleLoading();

            this.props.modifyMedal(inputObj);
        }

        submitDelete = (inputObj) => {
            console.log(inputObj);
            this.closeModal();

            this.props.toggleLoading();
            this.props.removeMedal(inputObj);
        }

        submitADD = (inputObj) => {
            console.log(inputObj);
            this.closeModal();

            this.props.toggleLoading();
            this.props.newMedal(inputObj);
        }



        componentDidMount() {
            this.props.toggleLoading();
            this.props.fetchData(() => { this.props.toggleLoading();});
        }


        render() {
            return (
                <div style={{ margin: '0 auto', marginTop: '3em', width: '50%' }}>
                    <h3>TrEdit Page ...</h3>
                    <table className="table table-hover" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.medals.map(p =>
                                    <tr key={p.id}>
                                        <td scope="row">{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>
                                            <button type="button" className="btn btn-info" onClick={() => { this.onRowEdit(p.id) }}>Edit</button>
                                            <button type="button" className="btn btn-danger" onClick={() => { this.onRowDelete(p.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <button type="button" class="btn btn-outline-success" onClick={() => { this.setState({ modalType: 'NEW' }); }}>+ Create New</button>
                    {this.setModalBody()}
                </div>
            );
        }
    }


)
// class TrEdit extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <h1>TrEdit Page ...</h1>
//          );
//     }
// }


export default TrEdit;