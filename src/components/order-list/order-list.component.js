// import React from "react";
// import OrderCard from "../order-card/order-card.component";
// import Pagination from "react-js-pagination";

// const OrderList = (props) => {
//     return (
//         <div>
//             {props.invoices.map((invoice, index) => (
//                 <OrderCard key={index} invoice={invoice}></OrderCard>
//             ))}
//         </div>
//     );
// };

// export default OrderList;

import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import OrderCard from "../order-card/order-card.component";

import "./order-list.styles.css";

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0,
        };
    }

    receivedData() {
        const data = this.props.invoices;
        const slice = data.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
        );
        const postData = slice.map((invoice, index) => (
            <OrderCard key={index} invoice={invoice}></OrderCard>
        ));
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData,
        });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState(
            {
                currentPage: selectedPage,
                offset: offset,
            },
            () => {
                this.receivedData();
            }
        );
    };

    componentDidMount() {
        this.receivedData();
    }

    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        );
    }
}
