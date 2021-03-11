import React, { Component } from "react";
import OrderCard from "../order-card/order-card.component";
import { connect } from "react-redux";
import {
    filterByValue,
    loadData,
    loadExactPage,
    loadNewPage,
    sortByAlphabet,
    sortByPrice,
} from "../../store";

class OrderList extends Component {
    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get("page");
        if (!pageQueryParam) {
            window.history.pushState({ page: 1 }, "title 1", "?page=1");
        } else {
        }
        this.props.dispatch(loadData({ count: 21 }));
    }

    filterByInput(e) {
        let input = e.target.value;
        this.props.dispatch(filterByValue({ value: input }));
    }

    nextPage() {
        this.props.dispatch(loadNewPage({ page: 1 }));
    }

    previousPage() {
        this.props.dispatch(loadNewPage({ page: -1 }));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({ page }));
    }

    sortByInput(e) {
        let value = e.target.value;
        let direction = value.endsWith("asc") ? "asc" : "desc";

        if (value.startsWith("price")) {
            this.props.dispatch(sortByPrice({ direction }));
        } else {
            this.props.dispatch(sortByAlphabet({ direction }));
        }
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div>
                <div>
                    <div>
                        <div className="field is-grouped">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                onChange={(e) => {
                                                    this.sortByInput(e);
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Click to Sort by
                                                </option>

                                                <option value="alphabet_asc">
                                                    Name - A-Z
                                                </option>
                                                <option value="alphabet_desc">
                                                    Name - Z-A
                                                </option>

                                                <option value="price_asc">
                                                    Price - Lowest to Highest
                                                </option>
                                                <option value="price_desc">
                                                    Price - Highest to Lowest
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="control float-right">
                                        <input
                                            onChange={(e) => {
                                                this.filterByInput(e);
                                            }}
                                            className="search"
                                            placeholder="Search with Name or Email"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tile is-ancestor"
                        style={{ flexWrap: "wrap" }}
                    >
                        {products &&
                            products.length &&
                            products.map((product) => (
                                <OrderCard product={product} />
                            ))}
                    </div>
                </div>
                <div className="float-right mt-3">
                    <nav
                        className="pagination"
                        role="navigation"
                        aria-label="pagination"
                    >
                        <button
                            className="button pagination-previous"
                            onClick={() => {
                                this.previousPage();
                            }}
                        >
                            Previous
                        </button>
                        <button
                            className="button pagination-next"
                            onClick={() => {
                                this.nextPage();
                            }}
                        >
                            Next page
                        </button>
                        <ul className="pagination-list">
                            {[...Array(this.props.state.filteredPages)].map(
                                (value, index) => (
                                    <button
                                        className={`button pagination-link ${
                                            this.props.state.currentPage ===
                                            index + 1
                                                ? "is-current"
                                                : ""
                                        }`}
                                        aria-label="Page 1"
                                        onClick={() => this.goToPage(index + 1)}
                                        aria-current="page"
                                    >
                                        {index + 1}
                                    </button>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(OrderList);
