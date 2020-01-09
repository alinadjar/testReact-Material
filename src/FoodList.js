import React, { Component } from 'react';

class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map(food => 
                            (
                                <tr>
                                    <td>{food.NAME}</td>
                                    <td>{food.PRICE}</td>
                                </tr>
                            )
                        )                        
                    }
                </tbody>
            </table>
        );
    }
}

export default FoodList;




