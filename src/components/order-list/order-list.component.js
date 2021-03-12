import React, { Component } from "react";
import OrderCard from "../order-card/order-card.component";
import ModalOrder from "../modal/order/order-modal.component";
import { Modal, ModalBody } from "reactstrap";
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
    constructor() {
        super();
        this.state = {
            selectedData: {},
            dataProducts: [],
            modalDialog: false,
            modalWithoutAnimation: false,
        };
    }
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

    toggleModal(name) {
        switch (name) {
            case "modalDialog":
                this.setState({ modalDialog: !this.state.modalDialog });
                break;
            case "modalWithoutAnimation":
                this.setState({
                    modalWithoutAnimation: !this.state.modalWithoutAnimation,
                });
                break;
            case "modalMessage":
                this.setState({ modalMessage: !this.state.modalMessage });
                break;
            case "modalAlert":
                this.setState({ modalAlert: !this.state.modalAlert });
                break;
            default:
                break;
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
                                                <option value="" disabled>
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
                                            type="search"
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
                            products.map((product, index) => (
                                <div key={index}>
                                    <a
                                        href="#modal"
                                        onClick={() => {
                                            this.setState({
                                                selectedData: product,
                                            });
                                            this.toggleModal(
                                                "modalWithoutAnimation"
                                            );
                                        }}
                                    >
                                        <OrderCard product={product} />
                                    </a>
                                </div>
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

                        <ul className="pagination-list">
                            {[...Array(this.props.state.filteredPages)].map(
                                (value, index) => (
                                    <button
                                        key={index}
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
                        <button
                            className="button pagination-next"
                            onClick={() => {
                                this.nextPage();
                            }}
                        >
                            Next page
                        </button>
                    </nav>
                </div>
                <Modal
                    isOpen={this.state.modalWithoutAnimation}
                    fade={false}
                    toggle={() => this.toggleModal("modalWithoutAnimation")}
                    className="modal"
                >
                    <ModalBody>
                        <h3>Order Detail</h3>
                        <ModalOrder product={this.state.selectedData} />

                        <button
                            className="btn float-right mt-2"
                            onClick={() =>
                                this.toggleModal("modalWithoutAnimation")
                            }
                        >
                            Close
                        </button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(OrderList);
