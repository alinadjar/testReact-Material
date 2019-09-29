import React, { Component } from 'react';
import { RestDataSource } from './webservice/RestDataSource';

import Axios from "axios";

import { withRouter } from "react-router-dom";

class IsolatedTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            badgeList: []
        }

        this.dataSource = new RestDataSource('http://192.168.87.62:7799/api/Login/test',
            //(i) => { console.log('error') }
            (err) => this.props.history.push(`/error/${err}`)
        );
        //this.props.dataSource || new RestDataSource('http://localhost:63676/api/Login/test');
    }

    deleteBadge(badge) {
        console.log(badge);

        // this.dataSource.Delete(
        //     badge,
        //     () => this.setState({ badgeList: this.state.badgeList.filter(p => p.id !== badge.id) })
        // );

        this.setState({ badgeList: this.state.badgeList.filter(p => p.id !== badge.id)});
    }


    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr><th colSpan="5"
                        className="bg-info text-white text-center h4 p-2">
                        (Isolated) Products
                    </th></tr>
                    <tr>
                        <th>ID</th><th>Name</th>
                        <th className="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.badgeList.map(p => <tr key={p.id}>
                            <td>{p.id}</td><td>{p.name}</td>
                            <td className="text-right">
                                ${Number(p.price).toFixed(2)}
                            </td>
                            <td>
                                {/* <Link className="btn btn-sm btn-warning mx-2"
                                    to={`/isolated/edit/${p.id}`}>
                                    Edit
                                </Link> */}
                                <button className="btn btn-sm btn-danger mx-2"
                                    onClick={() => this.deleteBadge(p)}>
                                    Delete
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        );
    }


    componentDidMount() {
        this.dataSource.GetData(data =>
            {
                this.setState({ badgeList: data })
                console.log(data);
            });            

        // const { data: badgeList } = await Axios.get('http://192.168.87.62:7799/api/Login/test');
        // this.setState({ badgeList });



        //  Axios.get('http://192.168.87.62:7799/api/Login/test')
        //     .then(response => console.log(response.data));
    }
}

export default withRouter(IsolatedTable);