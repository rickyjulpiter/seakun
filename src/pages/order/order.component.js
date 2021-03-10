import React, { Component } from "react";
import axios from "axios";

import OrderList from "../../components/order-list/order-list.component";
import SearchBox from "../../components/search-box/search-box.component";

export default class OrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            invoices: [],
            searchField: "",
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

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        this.getInvoices();
    }

    render() {
        const { invoices, searchField } = this.state;
        const filteredInvoices = invoices.filter((invoice) =>
            invoice.personalAccount.email
                .toLowerCase()
                .includes(searchField.toLowerCase())
        );
        return (
            <div className="main_content">
                <div className="header"></div>
                <div className="info">
                    <h1 className="mt-1">Order List</h1>

                    <SearchBox handleChange={this.handleChange} />
                    <OrderList invoices={filteredInvoices} />
                </div>
            </div>
        );
    }
}
