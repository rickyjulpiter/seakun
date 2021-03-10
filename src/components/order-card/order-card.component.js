import React from "react";
import moment from "moment";
import NumberFormat from "react-number-format";

export default function OrderCard(props) {
    return (
        <div className="card mt-3">
            <div className="card-header">
                <span className="float-left">
                    Order ID : {props.invoice.orderId}
                </span>
                <span className="float-right">
                    Create At:{" "}
                    {moment(props.invoice.createdAt.substring(0, 10)).format(
                        "LL"
                    )}
                </span>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <small>Info Akun</small>
                        <p>{props.invoice.personalAccount.name}</p>
                        <p>{props.invoice.personalAccount.email}</p>
                        <p>{props.invoice.personalAccount.phonenumber}</p>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>Provider</li>
                                    <li>Paket</li>
                                    <li>Exp</li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <ul>
                                    <li>{props.invoice.provider}</li>
                                    <li>{props.invoice.paket}</li>
                                    <li>
                                        {moment(
                                            props.invoice.expired.substring(
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
                                                props.invoice.payment
                                                    .paymentTotal
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
    );
}
