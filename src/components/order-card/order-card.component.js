import React from "react";
import moment from "moment";

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
                        "DD/MM/YYYY"
                    )}
                </span>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <small>Info Akun</small>
                        <p>{props.invoice.personalAccount.name}</p>
                        <p>{props.invoice.personalAccount.email}</p>
                        <p>{props.invoice.personalAccount.phonenumber}</p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Provider{" "}
                            <span className="float-right">
                                {props.invoice.provider}
                            </span>
                        </p>
                        <p>
                            Paket
                            <span className="float-right">
                                {props.invoice.paket}
                            </span>
                        </p>
                        <p>
                            Exp
                            <span className="float-right">
                                {moment(
                                    props.invoice.expired.substring(0, 10)
                                ).format("DD/MM/YYYY")}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
