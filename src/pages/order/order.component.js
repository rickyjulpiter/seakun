import React, { Component } from "react";
import axios from "axios";

import OrderList from "../../components/order-list/order-list.component";

export default class OrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            invoices: [],
        };
    }

    getInvoices = () => {
        axios
            .get(`http://demo2687090.mockable.io/order`)
            .then((res) => {
                let invoices = res.data;
                this.setState({ invoices });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.getInvoices();
    }

    render() {
        return (
            <div className="main_content">
                <div className="header"></div>
                <div className="info">
                    <h1 className="mt-1">Order List</h1>

                    {/* check when the data already exists */}
                    {Object.keys(this.state.invoices).length === 0 ? (
                        <></>
                    ) : (
                        <>
                            <OrderList />
                        </>
                    )}
                </div>
            </div>
        );
    }
}
