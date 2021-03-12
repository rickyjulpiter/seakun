import React, { Component } from "react";

import OrderList from "../../components/order-list/order-list.component";

export default class OrderComponent extends Component {
    render() {
        return (
            <div className="main_content">
                <div className="header"></div>
                <div className="info">
                    <h1 className="mt-1">Order List</h1>

                    <OrderList />
                </div>
            </div>
        );
    }
}
