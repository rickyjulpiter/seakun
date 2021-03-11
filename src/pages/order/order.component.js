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
            filteredInvoices: null,
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
        let search = e.target.value;
        let data = this.state.invoices;

        const filteredInvoices = data.filter((invoice) => {
            if (search == null) return invoice;
            else if (
                invoice.personalAccount.email
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                invoice.personalAccount.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ) {
                return invoice;
            }
        });

        this.setState({ filteredInvoices });
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
                            <SearchBox handleChange={this.handleChange} />
                            <OrderList invoices={this.state.invoices} />
                        </>
                    )}
                </div>
            </div>
        );
    }
}
