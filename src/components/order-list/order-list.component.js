import React from "react";
import OrderCard from "../order-card/order-card.component";

const OrderList = (props) => {
    return (
        <div>
            {props.invoices.map((invoice, index) => (
                <OrderCard key={index} invoice={invoice}></OrderCard>
            ))}
        </div>
    );
};

export default OrderList;
