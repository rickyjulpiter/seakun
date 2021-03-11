import React from "react";
import moment from "moment";
import NumberFormat from "react-number-format";

export default function OrderCard(props) {
    return (
        <div className="card mt-3">
            <div className="card-header">
                <span className="float-left">
                    Order ID : {props.product.orderId}
                </span>
                <span className="float-right">
                    Create At:{" "}
                    {moment(props.product.createdAt.substring(0, 10)).format(
                        "LL"
                    )}
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
                                            value={props.product.paymentTotal}
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
    );
}
