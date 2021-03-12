import React from "react";
import moment from "moment";
import NumberFormat from "react-number-format";

function ModalOrder(props) {
    return (
        <>
            <div className="card mt-3 card-no-shadow">
                <div className="card-header">
                    <span className="float-left">
                        Order ID : {props.product.orderId}
                    </span>
                    <span className="float-right">
                        Create At:{" "}
                        {moment(
                            props.product.createdAt.substring(0, 10)
                        ).format("LL")}
                    </span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5">
                            <small>Info Akun</small>
                            <p>{props.product.name}</p>
                            <p>{props.product.email}</p>
                            <p>{props.product.phonenumber}</p>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul>
                                        <li>Provider</li>
                                        <li>Paket</li>
                                        <li>Exp</li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <ul>
                                        <li>{props.product.provider}</li>
                                        <li>{props.product.paket}</li>
                                        <li>
                                            {moment(
                                                props.product.expired.substring(
                                                    0,
                                                    10
                                                )
                                            ).format("DD/MM/YYYY")}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="price-order float-right">
                                        {
                                            <NumberFormat
                                                value={
                                                    props.product.paymentTotal
                                                }
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"Rp. "}
                                            />
                                        }
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-no-shadow mt-1">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <ul>
                                <li>Voucher Code</li>
                                <li>Payment Status</li>
                                <li>Payment Date</li>
                                <li>Payment Bank</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>: {props.product.voucherCode}</li>
                                <li>: {props.product.paymentStatus}</li>
                                <li>
                                    :{" "}
                                    {moment(
                                        props.product.paymentDate.substring(
                                            0,
                                            10
                                        )
                                    ).format("LL")}
                                </li>
                                <li>: {props.product.paymentName}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalOrder;
