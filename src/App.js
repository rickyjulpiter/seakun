import React from "react";

import Header from "./components/header/header.component";
import OrderPage from "./pages/order/order.component";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <OrderPage />
            </div>
        );
    }
}

export default App;
